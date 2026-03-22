import type React from 'react';
import { motion } from 'motion/react'
import { cn } from '../../utils/cn'
import RightArrow from '../icons/RightArrow'

interface ArrowButtonProps {
    className?: string;
    iconStyle?: string;
    onClick?: () => void;
    direction: "left" | "right"
    disabled?: boolean;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ className, iconStyle, onClick, direction, disabled = false, ...props }) => {
    return (
        <motion.button
            whileHover="hover"
            initial="initial"
            disabled={disabled}
            className={cn(
                "w-10 h-10",
                "rounded-full",
                "flex justify-center items-center",
                "cursor-pointer",
                disabled ? "bg-muted-primary " : " bg-primary ",
                className
            )}
            onClick={onClick}
            {...props}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <RightArrow className={cn("stroke-white stroke-2 size-8", direction === "left" && "rotate-180", iconStyle)} />

        </motion.button>
    )
}

export default ArrowButton