import { motion, type Variants } from "motion/react";
import { cn } from "../../utils/cn";

const arrow: Variants = {
    initial: {
        x: 0,
        y: 0,
    },
    hover: {
        x: 2,
        y: -3,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 10
        }
    }
}

const TiltArrow = ({ className }: { className?: string }) => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("icons, rotate-35", className)}
            variants={{}}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <motion.path variants={arrow} d="M12 5l0 14" />
            <motion.path variants={arrow} d="M16 9l-4 -4" />
            <motion.path variants={arrow} d="M8 9l4 -4" />
        </motion.svg>
    );
};

export default TiltArrow;
