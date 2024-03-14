import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
	adapter: PrismaAdapter(db) as Adapter,
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: "",
			clientSecret: "",
		}),
		// ...add more providers here
	],
};

export default NextAuth(authOptions);
