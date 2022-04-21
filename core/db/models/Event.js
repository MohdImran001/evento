import mongoose from "mongoose";
import { nanoid } from "nanoid";

import User from "./User";

const LocationSchema = new mongoose.Schema({
  name: {
    /* Name of the venue */

    type: String,
    default: "",
  },
  address: {
    /* Formatted address of the venue returned by Google Maps API*/

    type: String,
    default: "",
  },
  place_id: {
    /* Google maps place_id of the venue */

    type: String,
    default: "",
  },
  additional_info: {
    /* Additional Information related to venue */

    type: String,
    default: "",
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
    default: "Untitled Event",
    maxlength: [60, "Title cannot be more than 60 characters"],
  },
  coverImageUrl: {
    /* Url of cover image of event page */

    type: String,
    default: "",
  },
  about: {
    /* description about event*/

    type: String,
    default: JSON.stringify({ ops: [{ insert: "\n" }] }),
  },
  hosts: [
    /* Refs to the oraganizers of the event*/

    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  eventDate: {
    /* when the event is goint to take place */

    default: Date.now,
    type: Date,
  },
  eventStartTime: {
    /* when the event is going to take place */

    default: Date.now,
    type: Date,
  },
  status: {
    /* Status of the event (Draft or Live) */

    type: "String",
    default: "Draft",
  },
  location: {
    /* location of the event with, Name, Address, Place_ID, and Additional Info */

    type: LocationSchema,
    default: {
      name: "",
      address: "",
      place_id: "",
      additional_info: "",
    },
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
