"use client";
import { useEffect } from 'react';
export default function AbsensiTransport() {
    useEffect(() => {
        window.location.href = '/activity/absensi-transport/absensi';
    }, []);
};
