import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { data } = await request.json();
    const link = data.link;
    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

    try {
        // Step 1: Expand the short link and get the full URL
        // const fullUrl = await expandAndExtractCoordinates(link);
        // if (!fullUrl) {
        //     return NextResponse.json(
        //         { message: "Invalid or unresolved link" },
        //         { status: 400 }
        //     );
        // }

        const fullUrl = link;
        // Step 2: Extract coordinates from the expanded URL
        const coordinates = extractCoordinates(fullUrl);
        if (!coordinates) {
            console.log("sini");

            return NextResponse.json(
                { error: "Coordinates not found in link" },
                { status: 400 }
            );
        }

        // Step 3: Call the Geocoding API to fetch the place name
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates}&key=${GOOGLE_MAPS_API_KEY}`
        );
        const dataMap = await response.json();
        console.log(dataMap.results[0]);

        if (dataMap.results && dataMap.results.length > 0) {
            return NextResponse.json(
                { placeName: dataMap.results[0].formatted_address },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { error: "Place name not found" },
            { status: 404 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 400 }
        );
    }
}

// Function to expand a short Google Maps link and extract the full URL
async function expandAndExtractCoordinates(
    link: string
): Promise<string | null> {
    try {
        const response = await fetch(link, {
            method: "HEAD",
            redirect: "follow",
        });
        return response.url || null;
    } catch (error) {
        console.error("Error expanding link:", error);
        return null;
    }
}

// Function to extract latitude and longitude from the full URL
function extractCoordinates(link: string): string | null {
    const match = link.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
    return match ? `${match[1]},${match[2]}` : null;
}
