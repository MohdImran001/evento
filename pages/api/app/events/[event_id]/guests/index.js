import { getToken } from "next-auth/jwt";

import dbConnect from "core/db/connect";
import Attendee from "core/db/models/Attendee";

import isAuthorized from "core/utils/authorized";
const secret = process.env.NEXTAUTH_SECRET;

/**
 * Retrieves people who are registered for the event
 * @param {*} req
 * @param {*} res
 */

export default async function handler(req, res) {
  // Only HTTP: GET method is allowed to fetch data
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();

  const { event_id } = req.query;
  const onlyCount = req.query.onlyCount;

  // Protect from unauthorized access
  const { sub: user_id } = await getToken({ req, secret });
  const authorized = await isAuthorized(event_id, user_id);
  if (!authorized) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  // Returns only count
  if (onlyCount === "1") {
    const count = await Attendee.find({ events: event_id }).count();
    return res.status(200).send({ count: count });
  }

  // Returns all documents
  const docs = await Attendee.find({ events: event_id }, "-events").lean();

  res.status(200).send({ guests: docs });
}
