import React from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";
import { cn } from "../../utils/cn";
import type { IconProp } from "../../utils/renderIcon";
import renderIcon from "../../utils/renderIcon";

interface ButtonProps extends HTMLMotionProps<"button"> {
    title: string;
    variant?: "primary" | "secondary" | "outline";
    leftIcon?: IconProp;
    rightIcon?: IconProp;
    leftIconStyle?: string;
    rightIconStyle?: string;
    className?: string;
    onClick?: () => void;
    textStyle?: string;
}

const variants = {
    primary: "bg-primary text-white text-shadow-xs font-semibold font-inter rounded-sm",
    secondary: "bg-muted text-primary text-shadow-xs font-semibold font-inter rounded-sm",
    outline: "border-1 border-primary text-shadow-xs font-semibold font-inter rounded-sm bg-transparent text-primary",
};

const buttonVariants: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.005 },
    tap: { scale: 0.995 },
};

const innerVariants: Variants = {
    initial: { scale: 1 },
    hover: { scale: 0.97 }
};

const Button: React.FC<ButtonProps> = ({
    title,
    variant = "primary",
    className,
    onClick,
    leftIcon,
    rightIcon,
    leftIconStyle,
    rightIconStyle,
    type = "button",
    textStyle,
    ...props
}) => {
    return (

        <motion.button
            className={cn(
                "px-6 py-4",
                "cursor-pointer group",
                "flex justify-center items-center gap-3",
                "transition-transform will-change-transform",
                variants[variant],
                className
            )}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            transition={{ duration: 0.15, ease: "easeOut" }}
            onClick={onClick}
            type={type}
            {...props}
        >
            <motion.span
                className="flex items-center gap-3"
                variants={innerVariants}
                transition={{ duration: 0.15, ease: "easeOut" }}
            >
                {leftIcon && (
                    <motion.span variants={innerVariants}>
                        {
                            renderIcon(leftIcon, leftIconStyle)
                        }
                    </motion.span>
                )}

                <span className={cn("text-base", textStyle)}>{title}</span>

                {rightIcon && (
                    <motion.span variants={innerVariants}>
                        {
                            renderIcon(rightIcon, rightIconStyle)
                        }
                    </motion.span>
                )}

            </motion.span>

        </motion.button>

    );
};

export default React.memo(Button);;
