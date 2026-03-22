import { createContext, useContext } from "react";

export interface CarouselContextValue {
  trackRef: React.RefObject<HTMLDivElement | null>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scroll: (direction: "left" | "right") => void;
}

export const CarouselContext = createContext<CarouselContextValue | null>(null);

export function useCarouselContext(): CarouselContextValue {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarouselContext must be used inside <Carousel>");
  }

  return context;
}
