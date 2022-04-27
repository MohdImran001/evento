import dbConnect from "core/db/connect";
import Attendee from "core/db/models/Attendee";

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

  const { event_id } = req.query;
  const onlyCount = req.query.onlyCount;

  await dbConnect();

  if (onlyCount === "1") {
    // Returns only count
    const count = await Attendee.find({ events: event_id }).count();
    return res.status(200).send({ count: count });
  }

  // Returns all documents
  const docs = await Attendee.find(
    { events: event_id },
    "name email updatedAt"
  ).lean();

  res.status(200).send({ guests: docs });
}
