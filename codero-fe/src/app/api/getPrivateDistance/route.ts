import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { data } = await req.json();

    const origin = data.start;
    const destination = data.destination; // Destructure lat1lng1 and lat2lng2 from the request body

    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
    try {
        // Call the Google Distance Matrix API
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${GOOGLE_MAPS_API_KEY}`
        );
        const responseData = await response.json();

        if (
            responseData.rows &&
            responseData.rows[0] &&
            responseData.rows[0].elements &&
            responseData.rows[0].elements[0].distance
        ) {
            const distance = responseData.rows[0].elements[0].distance.value; // Distance in meters
            const distanceInKm = distance / 1000; // Convert to kilometers
            return NextResponse.json(
                { distance: distanceInKm },
                { status: 200 }
            );
        }

        // If distance cannot be calculated, return a 400 error
        return NextResponse.json(
            { error: "Unable to calculate distance" },
            { status: 400 }
        );
    } catch (error: any) {
        console.error("Error:", error.message);
        // Return a 500 error for internal server errors
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
