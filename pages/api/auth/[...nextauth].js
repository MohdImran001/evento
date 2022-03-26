import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { MongoClient } from "mongodb";

import dbConnect from "core/db/connect";
import User from "core/db/models/User";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const clientPromise = client.connect();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID,
      clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  events: {
    createUser: async ({ user }) => {
      await dbConnect();
      User.findByIdAndUpdate(user.id, { events: [] }, (err, doc) => {
        if (err) {
          console.log(err);
          return;
        }
      });
    },
  },
});
