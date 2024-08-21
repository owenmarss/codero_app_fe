"use client";
import { useEffect } from 'react';

export default function Logout() {
    useEffect(() => {
        // Remove the token from localStorage
        localStorage.removeItem('token');

        // Optionally, if you are using cookies directly
        document.cookie = 'token=; Max-Age=0; path=/;'; // Removes the cookie by setting its expiry date to the past

        // Redirect to the login page
        window.location.href = '/login';
    }, []); // Empty dependency array to run once on mount

    return null;
}