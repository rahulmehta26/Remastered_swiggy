import React, { type ReactNode } from "react";
import { useCarouselContext } from "./CarouselContext";
import { cn } from "../../../utils/cn";

interface CarouselTrackProps {
    children: ReactNode;
    gap?: number;
    paddingY?: number;
    fadeEdges?: boolean;
    fadeColor?: string;
    className?: string;
}

const CarouselTrack: React.FC<CarouselTrackProps> = ({
    children,
    gap = 16,
    paddingY = 8,
    fadeEdges = true,
    fadeColor = "white",
    className,
}) => {
    const { trackRef, canScrollLeft, canScrollRight } = useCarouselContext();

    return (
        <div className="relative mt-2">
            {fadeEdges && (
                <>
                    <div
                        aria-hidden
                        style={{
                            background: `linear-gradient(to right, ${fadeColor}, transparent)`,
                        }}
                        className={cn(
                            "pointer-events-none absolute inset-y-0 left-0 z-10 w-12 transition-opacity duration-300",
                            canScrollLeft ? "opacity-100" : "opacity-0"
                        )}
                    />

                    <div
                        aria-hidden
                        style={{
                            background: `linear-gradient(to left, ${fadeColor}, transparent)`,
                        }}
                        className={cn(
                            "pointer-events-none absolute inset-y-0 right-0 z-10 w-12 transition-opacity duration-300",
                            canScrollRight ? "opacity-100" : "opacity-0"
                        )}
                    />
                </>
            )}

            <div
                ref={trackRef}
                style={{
                    gap,
                    paddingTop: paddingY,
                    paddingBottom: paddingY,
                }}
                className={cn(
                    "flex overflow-x-auto",
                    "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default CarouselTrack;