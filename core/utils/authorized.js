import dbConnect from "core/db/connect";
import Event from "core/db/models/Event";

// Input: event_id: String, user_id: String
// Output: event: Object || null
export default async function isAuthorized(event_id, user_id) {
  await dbConnect();

  const event = await Event.findById(event_id, "hosts").lean();
  if (!event) {
    return null;
  }

  const isOwner = !!event.hosts.find((hostId) => hostId.valueOf() === user_id);
  if (!isOwner) {
    return null;
  }

  return event;
}
