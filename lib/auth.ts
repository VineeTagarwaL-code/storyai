import { DefaultUser, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/utils/mongodb";
import User from "@/models/User";
import { AuthConfig } from "@/config/auth.config";
const authConfig = AuthConfig.getInstance();

const options = {
  providers: [
    GoogleProvider({
      clientId: authConfig.getClient(),
      clientSecret: authConfig.getSecret(),
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log(user);
      await dbConnect();

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // If user doesn't exist, create a new one
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
        });
      }

      return true;
    },
    async session({ session, token, user }) {
      if (!session.user) {
        session.user = user;
        session.user.id = user.id;
      }
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.id = dbUser._id;
      }
      return session;
    },
  },
} as NextAuthOptions;

export { options };
