import { NextRequest } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

// export { auth as middleware } from "@/auth";
export default auth(async function middleware(req: NextRequest) {});
