import { CourierClient } from "@trycourier/courier";

import dbConnect from "core/db/connect";
import Event from "core/db/models/Event";
import Attendee from "core/db/models/Attendee";

import { getLocalizedDate, getLocalizedTime } from "core/utils/event";

const courier = CourierClient({
  authorizationToken: process.env.COURIER_API_KEY,
});
const opts = "title hosts location.name eventDate eventStartTime";

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

    const event = await Event.findById(event_id, opts)
      .populate("hosts", "name")
      .lean();

    let attendee = await Attendee.findOne({ email: formData.email });

    // Check if already registered
    if (attendee && attendee.events.indexOf(event_id) >= 0) {
      return res
        .status(200)
        .json({ message: "You're already registered for the event" });
    }

    // Add event_id to Guest's object
    if (!attendee) {
      attendee = new Attendee(formData);
    }
    attendee.events.push(event_id);
    await attendee.save();

    // Send Confirmation Email
    await courier.send({
      message: {
        to: {
          email: formData.email,
        },
        template: process.env.COURIER_TEMPLATE_ID,
        data: {
          recipientName: formData.name,
          guest_name: formData.name,
          host_name: event.hosts[0].name,
          event_name: event.title,
          event_venue: event.location.name,
          event_date: getLocalizedDate(event.eventDate),
          event_time: getLocalizedTime(event.eventStartTime),
        },
      },
    });

    res.status(201).json({
      message:
        "You've been successfully registered for the event. We will send you a confirmation email.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
}
