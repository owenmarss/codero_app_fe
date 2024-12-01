import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import exp from "constants";

export async function GET(req: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    let id = null;

    if (token) {
        const decodedToken: any = jwt.decode(token?.value);
        id = decodedToken?.id;
    }

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/users`, {
            cache: 'no-cache',
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token?.value || ''}`, // Use an empty string if token is undefined
            }
        })

        if (res.ok) { // Check if the response status is in the range of 200–299
            const data = await res.json(); // Parse the JSON response
            return NextResponse.json(data); // Return the API response as JSON
        } else {
            // Handle unauthorized or other errors
            return NextResponse.json(
                { message: "Invalid" },
                { status: res.status } // Reflect the actual status from the API response
            );
        }
    } catch (error) {
        console.error("Error fetching messages:", error); // Log the error for debugging
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}