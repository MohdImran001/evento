import { getToken } from "next-auth/jwt";
import isAuthorized from "core/utils/authorized";

const secret = process.env.NEXTAUTH_SECRET;

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns - success/error
 */
export default async function handler(req, res) {
  // Only HTTP: PUT method is allowed to update data
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { event_id } = req.query;
  const { eventData } = req.body;
  const { sub: user_id } = await getToken({ req, secret });

  // Protect from unauthorized access
  const event = await isAuthorized(event_id, user_id);
  if (!event) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  res.status(200).json({ ...eventData });
}
