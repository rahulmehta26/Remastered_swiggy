import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "../../utils/cn";

interface ButtonProps extends HTMLMotionProps<"button"> {
    title: string;
    variant?: "primary" | "secondary" | "outline";
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;
    leftIconStyle?: string;
    rightIconStyle?: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
    textStyle?: string;
}

const variants = {
    primary: "bg-primary text-white text-shadow-xs font-bold font-inter rounded-2xl",
    secondary: "bg-muted text-primary text-shadow-xs font-bold font-inter rounded-2xl",
    outline: "border-1 border-primary text-shadow-xs font-bold font-inter rounded-2xl bg-transparent text-primary",
};

const Button: React.FC<ButtonProps> = ({
    title,
    variant = "primary",
    className,
    onClick,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    leftIconStyle,
    rightIconStyle,
    type = "button",
    textStyle,
    ...props
}) => {
    return (

        <motion.button
            className={cn(
                "px-6 py-3",
                "cursor-pointer group",
                "flex justify-center items-center gap-3",
                variants[variant],
                className
            )}
            initial="initial"
            whileHover="hover"
            whileTap={{
                scale: [1.025, 0.985, 1],
                transition: {
                    duration: 0.5
                }
            }}
            {...props}
        >

            {LeftIcon && <LeftIcon className={cn(leftIconStyle)} />}

            <span
                className={cn(
                    "text-base",
                    textStyle
                )}
            >
                {title}
            </span>

            {RightIcon && <RightIcon className={cn(rightIconStyle)} />}
        </motion.button>

    );
};

export default Button;
