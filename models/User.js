import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the user."],
    maxlength: [60, "Name cannot be more than 60 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide the email of the user"],
    match: /.+\@.+\..+/,
    unique: true,
  },
  profilePictureUrl: {
    type: String,
    default: "/avatar.png",
  },
  events: [
    {
      type: String,
      ref: "Event",
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
