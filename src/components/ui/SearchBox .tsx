import type { ReactNode } from "react"
import { motion } from "motion/react"
import { cn } from "../../utils/cn";

interface SearchBoxProps {
    children: ReactNode;
    className?: string;
}


const SearchBox = ({ children, className }: SearchBoxProps) => {
    return (
        <motion.section
            className={cn(
                "w-full px-4 py-4",
                "border-white bg-white",
                "rounded-sm",
                "flex items-center gap-4 justify-between",
                className
            )}
        >
            {
                children
            }
        </motion.section>
    )
}

export default SearchBox 