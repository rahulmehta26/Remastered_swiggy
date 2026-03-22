import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { CarouselContext } from "./CarouselContext";
import CarouselHeader from "./CarouselHeader";
import CarouselTrack from "./CarouselTrack";
import CarouselItem from "./CarouselItem";
import { cn } from "../../../utils/cn";

interface CarouselProps {
    children: ReactNode;
    scrollStep?: number;
    className?: string;
}

function CarouselRoot({
    children,
    scrollStep,
    className,
}: CarouselProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const syncState = useCallback(() => {
        const element = trackRef.current;
        if (!element) return;

        setCanScrollLeft(element.scrollLeft > 2);
        setCanScrollRight(
            element.scrollLeft + element.clientWidth < element.scrollWidth - 2
        );
    }, []);

    useEffect(() => {
        const element = trackRef.current;
        if (!element) return;

        syncState();

        element.addEventListener("scroll", syncState, { passive: true });

        const resizeObserver = new ResizeObserver(() => {
            syncState();
        });

        resizeObserver.observe(element);

        return () => {
            element.removeEventListener("scroll", syncState);
            resizeObserver.disconnect();
        };
    }, [syncState]);

    const scroll = useCallback(
        (direction: "left" | "right") => {
            const element = trackRef.current;
            if (!element) return;

            const step = scrollStep ?? element.clientWidth * 0.75;

            element.scrollBy({
                left: direction === "left" ? -step : step,
                behavior: "smooth",
            });
        },
        [scrollStep]
    );

    return (
        <CarouselContext.Provider
            value={{
                trackRef,
                canScrollLeft,
                canScrollRight,
                scroll,
            }}
        >
            <div className={cn("w-full", className)}>{children}</div>
        </CarouselContext.Provider>
    );
}

export const Carousel = Object.assign(CarouselRoot, {
    Header: CarouselHeader,
    Track: CarouselTrack,
    Item: CarouselItem,
});