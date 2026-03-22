import React from "react";
import { cn } from "../../utils/cn";

const SignIn = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("icons", className)}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M3 12h13l-3 -3" />
            <path d="M13 15l3 -3" />
        </svg>
    );
};

export default SignIn;
