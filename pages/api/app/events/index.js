import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";

import dbConnect from "../../../../core/db/connect";
import User from "../../../../core/db/models/User";

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(req, res) {
  const token = await getToken({ req, secret });
  console.log("Event TOKEN - ", token);
  res.end();
}
