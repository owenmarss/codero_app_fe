import React from "react";

interface PaginationRightProps {
    className?: string;
}

function PaginationRight({ className }: PaginationRightProps, getAllMessages: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={24}
            height={24}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
        </svg>
    );
}

export default PaginationRight;
