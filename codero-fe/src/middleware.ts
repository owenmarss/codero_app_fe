import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    let isLogin = token? true : false;
    
    if(!isLogin) {
        console.log("User is not logged in");
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    } else {
        // Logic if user is logged in
    }
}

export const config = {
    matcher: [
        "/",
        "/dashboard",
        "/schedule",
        "/activity/:path*",
        "/history",
        "/notification",

        // User Page
        "/register",
        "/profile",
    ],
}