import { getToken } from "next-auth/jwt";

import dbConnect from "core/db/connect";
import Event from "core/db/models/Event";

import isAuthorized from "core/utils/authorized";
const secret = process.env.NEXTAUTH_SECRET;

/**
 * Updates access property of the event
 * @param {*} req
 * @param {*} res
 */

export default async function handler(req, res) {
  // Only HTTP: PATCH method is allowed to modify data
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();
  const { event_id } = req.query;
  const { props } = req.body;
  console.log(props);

  // Protect from unauthorized access
  const { sub: user_id } = await getToken({ req, secret });
  const authorized = await isAuthorized(event_id, user_id);
  if (!authorized) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  const doc = await Event.findByIdAndUpdate(
    event_id,
    { access: { ...props } },
    { new: true }
  ).lean();
  res.status(200).send({ access: doc.access });
}
