import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function middleware(req: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    let isLogin = token ? true : false;

    if (!isLogin) {
        console.log("User is not logged in");
        return NextResponse.redirect(new URL("/login", req.nextUrl));
    } else {
        // if path is /login
        if (req.nextUrl.pathname === "/login") {
            return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
        }

        let posisi: string | null = null;
        if (token) {
            try {
                const decodedToken: any = jwt.decode(token);
                posisi = decodedToken?.posisi || null;
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
        let allowedPath: string[] = [];
        // if (posisi && posisi=="Head") {
        if (posisi && ["Head"].includes(posisi)) {
            allowedPath = [
                "/dashboard",
                "/schedule",
                "/activity/:path*",
                "/history",
                "/notification",
                "/logout",
            ];
        } else if (posisi && ["Teacher"].includes(posisi)) {
            allowedPath = [
                "/dashboard",
                "/logout",
            ];
        } else if (posisi && ["Business Digital"].includes(posisi)) {
            allowedPath = [
                "/dashboard",
                "/schedule",
                "/activity/:path*",
                "/history",
                "/logout",
                "/notification",
            ];
        }

        // if (allowedPath.includes(req.nextUrl.pathname)) {
        //     console.log("tEst1");
        //     return NextResponse.next();
        // } else if (req.nextUrl.pathname !== "/dashboard") {
        //     console.log("tEst2");
        //     return NextResponse.redirect(new URL("/dashboard", req.nextUrl));       // To stop infinite loop
        // } else {
        //     console.log("tEst3");
        //     return NextResponse.next();
        // }
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
        "/logout",
    ],
};
