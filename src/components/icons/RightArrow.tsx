import { motion, type Variants } from "motion/react";
import { cn } from "../../utils/cn";

const rightArrow: Variants = {
    initial: {
        x: 0,
    },
    hover: {
        x: 3,
        transition: {
            duration: 0.35,
            ease: "easeInOut",
        },
    },
};

const RightArrow = ({ className }: { className?: string }) => {
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
            <motion.path variants={rightArrow} d="M5 12l14 0" />
            <motion.path variants={rightArrow} d="M13 18l6 -6" />
            <motion.path variants={rightArrow} d="M13 6l6 6" />
        </svg>
    );
};

export default RightArrow;
