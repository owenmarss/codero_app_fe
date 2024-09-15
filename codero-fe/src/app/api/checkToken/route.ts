import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/users/check_token/${token?.value}`, {
            cache: 'no-cache',
            headers: {
                'Authorization': `Bearer ${token?.value}` // Ensure you are passing the value of the cookie
            }
        });

        if (res.status === 200) {
            return NextResponse.json({ message: "Token Verified" });
        } else {
            console.log(res.status);
            return NextResponse.json(
                { message: "Invalid"},
                { status: 401 }
            );
        }
    }
    catch (error) {
        return NextResponse.json(
            { message: "Server error"},
            {status: 500 }
        );
    }
} 