import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    let id = null;

    if(token) {
        const decodedToken: any = jwt.decode(token?.value);
        id = decodedToken?.id;
    } 

    try {
        const res = await fetch(`http://127.0.0.1:8000/api/users/${id}`, {
            cache: 'no-cache',
            headers: {
                'Authorization': `Bearer ${token?.value}` // Ensure you are passing the value of the cookie
            }
        });
        const data = await res.json(); // Assuming Express returns a JWT token
        console.log(data);
    } catch (error) {
        return NextResponse.json(
            { message: "Server error"},
            {status: 500 }
        );
    }
}