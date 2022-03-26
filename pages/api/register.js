import dbConnect from "core/db/connect";
import Attendee from "core/db/models/Attendee";

export default async function handler(req, res) {
  const { eventId, name, email } = req.body;

  try {
    await dbConnect();
    let attendee = await Attendee.findOne({ email: email });

    if (attendee && attendee.events.indexOf(eventId) >= 0) {
      return res
        .status(200)
        .json({ message: "You're already registered for the event" });
    }

    if (!attendee) {
      attendee = new Attendee({ name, email });
    }

    attendee.events.push(eventId);
    await attendee.save();

    res.status(201).json({
      message:
        "You've been successfully registered for the event. We will send you a confirmation email.",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
