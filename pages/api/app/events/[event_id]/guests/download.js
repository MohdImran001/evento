import { getToken } from "next-auth/jwt";
import { format } from "@fast-csv/format";

import dbConnect from "core/db/connect";
import Attendee from "core/db/models/Attendee";

import isAuthorized from "core/utils/authorized";
const secret = process.env.NEXTAUTH_SECRET;

/**
 * Download Guests reponses into CSV format
 * @param {*} req
 * @param {*} res
 */

export default async function handler(req, res) {
  // Only HTTP: GET method is allowed to fetch CSV file
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await dbConnect();

  // Protect from unauthorized access
  const { event_id } = req.query;
  const { sub: user_id } = await getToken({ req, secret });
  if (!(await isAuthorized(event_id, user_id))) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  // Create a writable csv stream and pipe it to server response
  const CSVStream = format({ headers: true });
  CSVStream.pipe(res);
  res.setHeader("Content-disposition", "attachment; filename=guests.csv");
  res.setHeader("Content-Type", "text/csv");

  // Fetch data and write data to CSV stream
  const d = Attendee.find({ events: event_id }, "name email -_id").cursor();
  for await (const doc of d) {
    CSVStream.write({ name: doc.name, email: doc.email });
  }

  CSVStream.end();
}
