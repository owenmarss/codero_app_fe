import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function middleware(req: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    let isLogin = token ? true : false;
    let allowedPath: any = [];
    let posisi: string | null = null;

    if (token) {
        try {
            const decodedToken: any = jwt.decode(token);
            posisi = decodedToken?.role || null;
        } catch (error) {
            console.error("Failed to decode token:", error);
        }
    }

    if (posisi && posisi == "Head") {
        allowedPath = [
            "/dashboard",
            "/schedule",
            "/activity",
            "/logout",
            "/message",
        ];
    }
    else if (posisi && ["Teacher"].includes(posisi)) {
        allowedPath = [
            "/dashboard",
            "/schedule",
            "/activity",
            "/history",
            "/message",
            "/profile",
            "/logout"
        ];
    }
    else if (posisi && ["Business Digital"].includes(posisi)) {
        allowedPath = [
            "/dashboard",
            "/schedule",
            "/activity/:path*",
            "/history",
            "/message",
            "/logout",
        ];
    }

    if (isLogin) {
        if (allowedPath.some((path:string) => req.nextUrl.pathname.startsWith(path))) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
        }
    } else if (!isLogin) {
        if (req.nextUrl.pathname === "/login") return NextResponse.next();
        else {
            return NextResponse.redirect(new URL("/login", req.nextUrl));
        }
    }
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|api).*)", // Exclude static files and assets from middleware
    ],
};
