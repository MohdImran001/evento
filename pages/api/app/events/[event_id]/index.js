import { getToken } from "next-auth/jwt";

import dbConnect from "core/db/connect";
import Event from "core/db/models/Event";
import isAuthorized from "core/utils/authorized";

const secret = process.env.NEXTAUTH_SECRET;

/**
 * Return event info
 * @param {*} req
 * @param {*} res
 * @returns
 */
export default async function handler(req, res) {
  const { event_id } = req.query;
  const { sub: user_id } = await getToken({ req, secret });
  const e = await isAuthorized(event_id, user_id);

  // Protect from unauthorized access
  if (!e) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  await dbConnect();
  const event = await Event.findById(event_id).lean();

  // Return only desired fields
  const fields = req.query.fields?.split(",");
  if (fields && fields.length > 0) {
    const filteredEventData = Object.keys(event)
      .filter((key) => fields.includes(key))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: event[key],
        };
      }, {});

    return res.status(200).json({ ...filteredEventData });
  }

  // Return complete event object
  return res.status(200).json({ ...event });
}
