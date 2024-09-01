import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkPassword } from "@/app/utils/hash";
import connectToDB from "@/app/utils/connectToDB";
import { NextResponse } from "next/server";

const authOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        try {
          const client = await connectToDB();
          const collection = client.db(process.env.DB_NAME).collection(process.env.COLL_AUTH);
          const user = await collection.findOne({ name: username });
          if (user) {
            const isMatched = await checkPassword(password, user.password);
            if (isMatched && user.isVerified) {
              // console.log('1. authorize')
              return {
                name: user.name,
                // pavan: "gupta",
              };
            } else {
              throw new Error("Invalid Credentials");
            }
          } else {
            throw new Error("Invalid Credentials");
          }
        } catch (error) {
          throw new Error("Invalid Credentials");
        }
      },
    }),
  ],
  // callbacks: {
  //   async session(val) {
  //     // console.log('3. session', val)
  //     return val;
  //   },
  //   async signIn(val) {
  //     // console.log('2. signIn', val)
  //     return val;
  //   },
  // },
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
