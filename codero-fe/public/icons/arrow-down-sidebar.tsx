import React from "react";

interface ArrowDownSidebarProps {
    id?: string,
    className?: string; // or React.CSSProperties
}

function ArrowDownSidebar({id, className}: ArrowDownSidebarProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={18}
            height={18}
            id={id}
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
        </svg>
    )
}

export default ArrowDownSidebar;