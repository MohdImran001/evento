import mongoose from "mongoose";
import { nanoid } from "nanoid";

import User from "./User";

const LocationSchema = new mongoose.Schema({
  name: {
    /* Name of the venue */

    type: String,
    required: [true, "Please provide a venue name for this event."],
  },
  address: {
    /* Formatted address of the venue returned by Google Maps API*/

    type: String,
    required: [true, "Please provide the address for this event."],
  },
  place_id: {
    /* Google maps place_id of the venue */

    type: String,
    required: [
      true,
      "Please provide a place_id of the location for this event.",
    ],
  },
});

const EventSchema = new mongoose.Schema({
  _id: {
    /* A unique id for this event */

    type: String,
    default: () => nanoid(9),
    immutable: true,
  },
  title: {
    /* The name of this event */

    type: String,
    required: [true, "Please provide a title for this event."],
    maxlength: [60, "Title cannot be more than 60 characters"],
  },
  coverImageUrl: {
    /* Url of cover image of event page */

    required: [true, "Please provide an image url for this event."],
    type: String,
  },
  about: {
    /* description about event*/

    required: [true, "Please provide a description for this event."],
    type: String,
  },
  hosts: [
    /* Refs to the oraganizers of the event*/

    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  eventDate: {
    /* when the event is goint to take place*/

    required: [true, "Please provide a date for this event."],
    type: Date,
  },
  location: {
    /* location of the event with, Name, Address and Place_id*/

    required: [true, "Please provide a location for this event."],
    type: LocationSchema,
  },
  createdAt: {
    /* Timestamp when the event is created */

    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    /* Timestamp when the event is updated */

    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
