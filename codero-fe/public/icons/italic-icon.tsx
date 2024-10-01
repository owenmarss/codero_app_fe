import React from "react";

interface ItalicIconProps {
    className?: string; // or React.CSSProperties
}

function ItalicIcon({ className }: ItalicIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={16}
            height={16}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"
            />
        </svg>
    );
}

export default ItalicIcon;