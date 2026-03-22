import React, { type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "../../../utils/cn";

interface CarouselItemProps {
    children: ReactNode;
    index?: number;
    className?: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
    children,
    index = 0,
    className,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.3,
                delay: Math.min(index * 0.045, 0.4),
                ease: "easeOut",
            }}
            whileHover={{
                y: -3,
                transition: { duration: 0.18, ease: "easeOut" },
            }}
            className={cn("shrink-0", className)}
        >
            {children}
        </motion.div>
    );
};

export default CarouselItem;