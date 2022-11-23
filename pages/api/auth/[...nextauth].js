import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
  ],
  pages: {
    signIn: "/",
  },
  // callbacks: {
  //   async session(session, user) {
  //     session.user.id = user.id
  //     return session
  //   },
  // },
}

export default NextAuth(authOptions)
