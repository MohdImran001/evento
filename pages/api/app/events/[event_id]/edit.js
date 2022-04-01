import { getToken } from "next-auth/jwt";
import isAuthorized from "core/utils/authorized";

const secret = process.env.NEXTAUTH_SECRET;

// PUT: Update event data
// TODO: Add JS_DOC
export default async function handler(req, res) {
  // Only HTTP: PUT method is allowed to update data
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Protect from unauthorized access
  const { event_id } = req.query;
  const { sub: user_id } = await getToken({ req, secret });
  const event = await isAuthorized(event_id, user_id);
  if (!event) {
    return res.status(403).json({ message: "Not Authorized" });
  }
}
