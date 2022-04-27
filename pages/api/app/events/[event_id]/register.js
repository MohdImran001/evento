import dbConnect from "core/db/connect";
import Attendee from "core/db/models/Attendee";

/**
 * Register an attendee for the event
 * @param {*} req
 * @param {*} res
 * @returns
 */

export default async function handler(req, res) {
  // Only HTTP: POST method is allowed to update data
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { event_id } = req.query;
  const { formData } = req.body;

  try {
    await dbConnect();
    let attendee = await Attendee.findOne({ email: formData.email });

    if (attendee && attendee.events.indexOf(event_id) >= 0) {
      return res
        .status(200)
        .json({ message: "You're already registered for the event" });
    }

    if (!attendee) {
      attendee = new Attendee(formData);
    }

    attendee.events.push(event_id);
    await attendee.save();

    res.status(201).json({
      message:
        "You've been successfully registered for the event. We will send you a confirmation email.",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
