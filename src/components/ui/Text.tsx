import React, { type ReactNode } from 'react'
import { cn } from '../../utils/cn';

interface TextProps {
    children: ReactNode;
    as: TextElement;
    variant?: keyof typeof variants;
    className?: string;
}

type TextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span"

const variants = {
    hero: "text-5xl md:text-5xl lg:text-7xl font-extrabold tracking-none leading-[5rem] font-poppins",
    heading: "text-3xl font-semibold font-poppins",
    subHeading: "text-xl font-medium text-gray-600 font-poppins",
    para: "text-base text-gray-700 leading-relaxed font-inter",
    tags: "text-sm font-medium tracking-wide font-inter",
    base: "text-base font-inter",
}

const Text: React.FC<TextProps> = ({
    as: TextComponent = "span",
    children,
    variant = "base",
    className,
}) => {
    return (
        <TextComponent
            className={cn(
                "text-base text-white text-shadow-xs",
                variants[variant],
                className,
            )}
        >
            {children}
        </TextComponent>
    )
}

export default Text