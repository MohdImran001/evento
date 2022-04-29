import { getToken } from "next-auth/jwt";

import dbConnect from "core/db/connect";
import Attendee from "core/db/models/Attendee";

import isAuthorized from "core/utils/authorized";
const secret = process.env.NEXTAUTH_SECRET;

/**
 * Remove people from Guest list of an event
 * @param {*} req
 * @param {*} res
 */

export default async function handler(req, res) {
  // Only HTTP: DELETE method is allowed to fetch data
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();

  const { event_id } = req.query;
  const guestId = req.query.guestId;

  // Protect from unauthorized access
  const { sub: user_id } = await getToken({ req, secret });
  const authorized = await isAuthorized(event_id, user_id);
  if (!authorized) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  // Remove event_id from guest's document event's array
  const guest = await Attendee.findById(guestId);
  guest.events = guest.events.filter((eventId) => eventId !== event_id);
  await guest.save();

  res.send({ message: `Guest ${guestId} have been removed successfully` });
}
