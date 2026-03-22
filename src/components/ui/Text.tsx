import React, { type ReactNode } from 'react'
import { cn } from '../../utils/cn';

interface TextProps {
    children: ReactNode;
    as?: TextElement;
    variant?:
    | "hero"
    | "heading"
    | "subHeading"
    | "para"
    | "tags"
    | "base"
    | "caption"
    | "micro";
    className?: string;
}

type TextElement = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span"

const variants = {
    hero: "text-5xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[5rem] font-poppins",

    heading: "text-3xl md:text-3xl lg:text-5xl font-semibold tracking-tight font-poppins",

    subHeading: "text-xl md:text-xl lg:text-xl font-medium text-gray-600 font-poppins",

    para: "text-base md:text-base lg:text-lg text-gray-700 font-inter",

    tags: "text-sm md:text-sm lg:text-base font-medium tracking-wide font-inter text-gray-800",

    base: "text-base font-inter text-gray-900",

    caption: "text-xs md:text-sm text-gray-500 font-inter",

    micro: "text-[10px] md:text-xs text-gray-400 font-inter",
};

const Text: React.FC<TextProps> = ({
    as: TextComponent = "span",
    children,
    variant = "base",
    className,
}) => {
    return (
        <TextComponent
            className={cn(
                "text-shadow-xs",
                variants[variant],
                className,
            )}
        >
            {children}
        </TextComponent>
    )
}

export default Text