import { getToken } from "next-auth/jwt";

import dbConnect from "core/db/connect";
import Event from "core/db/models/Event";

const secret = process.env.NEXTAUTH_SECRET;

/**
 * Creates a new event
 * @param {*} req
 * @param {*} res
 */
export default async function handler(req, res) {
  // Only HTTP: POST method is allowed to create new event
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();
    const { sub: userId } = await getToken({ req, secret });

    const event = new Event({});
    event.hosts.push(userId);
    const result = await event.save();

    res.status(200).json({ ...result._doc });
  } catch (error) {
    res.status(500).json({
      message: "Oops, an error occured while fetching your events",
      error: error,
    });
  }
}
