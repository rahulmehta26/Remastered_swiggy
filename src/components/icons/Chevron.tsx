import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { hover } from "../animations/hover";

type ChevronProps = {
    isOpen: boolean;
    className?: string;
};

const Chevron = ({ isOpen, className }: ChevronProps) => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
            className={cn("icons", className)}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
            style={{ transformOrigin: "50% 50%" }}
            whileHover="hover"
            initial="initial"
            variants={{
            }}
        >
            <motion.path variants={hover} d="M47.6,17.8L27.1,38.5c-0.6,0.6-1.6,0.6-2.2,0L4.4,17.8c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2 c0.6-0.6,1.6-0.6,2.2,0l16.1,16.3c0.6,0.6,1.6,0.6,2.2,0l16.1-16.2c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C48.1,16.3,48.1,17.2,47.6,17.8z" />
        </motion.svg>
    );
};

export default Chevron;
