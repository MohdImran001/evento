import { getToken } from "next-auth/jwt";

import dbConnect from "core/db/connect";
import User from "core/db/models/User";

const secret = process.env.NEXTAUTH_SECRET;

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns {Array} - All events created by authenticated user
 */
export default async function handler(req, res) {
  try {
    await dbConnect();
    const { sub } = await getToken({ req, secret });
    const { events } = await User.findById(sub).populate("events").lean();
    res.status(200).json({ events: events });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Oops, an error occured while fetching your events" });
  }
}
