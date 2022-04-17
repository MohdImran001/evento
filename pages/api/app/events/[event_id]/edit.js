import { getToken } from "next-auth/jwt";
import isAuthorized from "core/utils/authorized";
import Event from "core/db/models/Event";

const secret = process.env.NEXTAUTH_SECRET;

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns - success/error
 */
export default async function handler(req, res) {
  // Only HTTP: PUT method is allowed to update data
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { event_id } = req.query;
  const { sub: user_id } = await getToken({ req, secret });

  // Protect from unauthorized access
  if (!(await isAuthorized(event_id, user_id))) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  // Update event data
  const { newEventData } = req.body;
  const newData = await Event.findByIdAndUpdate(event_id, newEventData, {
    new: true,
  }).lean();

  res.status(200).json({ ...newData });
}
