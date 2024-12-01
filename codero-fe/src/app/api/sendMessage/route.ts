import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    let id = null;

    if (token) {
        const decodedToken: any = jwt.decode(token?.value);
        id = decodedToken?.id;
    }

    const { data } = await req.json();

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/messages`, {
            cache: 'no-cache',
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Authorization': `Bearer ${token?.value || ''}`, // Use an empty string if token is undefined
            }
        })

    } catch (error) {
        console.error("Error fetching messages:", error); // Log the error for debugging
        return NextResponse.json(
            { message: "Server error" },
            { status: 500 }
        );
    }
}