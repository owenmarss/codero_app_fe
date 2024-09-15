// app/api/logout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = cookies();

    // Clear the token by setting it to an expired date
    cookieStore.set({
        name: "token",
        value: "",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Set this in production
        path: "/",
        expires: new Date(0), // Expire the cookie immediately
    });

    // Respond with a success message
    return NextResponse.json({ message: "Logout successful" });
}
