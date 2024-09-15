import React from "react";

interface CloseIconProps {
    id?: string;
    className?: string; // or React.CSSProperties
}

function CloseIcon({ id, className }: CloseIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={24}
            height={24}
            id={id}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
            />
        </svg>
    );
}

export default CloseIcon;