import { getToken } from "next-auth/jwt";
import isAuthorized from "core/utils/authorized";
import Event from "core/db/models/Event";

const secret = process.env.NEXTAUTH_SECRET;

/**
 * Delete Event
 * @param {*} req
 * @param {*} res
 * @returns - success/error
 */

export default async function handler(req, res) {
  // Only HTTP: DELETE method is allowed to delete event
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { event_id } = req.query;
  const { sub: user_id } = await getToken({ req, secret });

  // Protect from unauthorized access
  if (!(await isAuthorized(event_id, user_id))) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  // Delete event data
  await Event.findByIdAndDelete(event_id);
  res.status(200).json({ message: "Event deleted successfully" });
}
