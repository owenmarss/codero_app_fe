import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    const { data } = await request.json();

    try {
        // Send login request to the Express backend
        const res = await fetch("http://localhost:8000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data}),
        });

        if (res.ok) {
            const { accessToken } = await res.json(); // Assuming Express returns a JWT token
            
            // Set the token as a cookie using next/headers
            const cookieStore = cookies();
            cookieStore.set({
                name: "token",
                value: accessToken,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // use secure cookies in production (HTTPS)
                path: "/",
                maxAge: 60 * 60, // 24 hours
            });

            // Return a success response
            return NextResponse.json({ message: "Login successful" });
        } else {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { message: "Error logging in" },
            { status: 500 }
        );
    }
}
