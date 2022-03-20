import mongoose from "mongoose";

const AttendeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name of the attendee."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide the email of the attendee"],
    match: /.+\@.+\..+/,
    unique: true,
  },
  events: [
    {
      type: String,
      ref: "Event",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Attendee ||
  mongoose.model("Attendee", AttendeeSchema);
