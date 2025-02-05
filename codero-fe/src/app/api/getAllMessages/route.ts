import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";
    
    let userId: string | null = null;
    if (token?.value) {
        try {
            const decodedToken: any = jwt.decode(token.value);
            userId = decodedToken?.id || null;
            // console.log(decodedToken);
            // console.log(posisi);
        } catch (error) {   
            console.error('Failed to decode token:', error);
        }
    }
    
    try {
        const res = await fetch(`http://127.0.0.1:8000/api/messages/user/${userId}?page=${page  }`, {
            cache: 'no-cache',
            headers: {
                'Authorization': `Bearer ${token?.value || ''}`, // Use an empty string if token is undefined
            },
        });

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
