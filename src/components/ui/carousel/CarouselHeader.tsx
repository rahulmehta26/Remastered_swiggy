import React from 'react'
import Text from '../Text'
import { cn } from '../../../utils/cn'
import { useCarouselContext } from './CarouselContext';
import { motion, AnimatePresence } from 'motion/react';
import ArrowButton from '../ArrowButton';

interface CarouselHeaderPros {
    title?: string;
    className?: string;
    rightSlot?: React.ReactNode;
    titleClassName?: string;
}

const CarouselHeader: React.FC<CarouselHeaderPros> = ({ title, className, titleClassName, rightSlot }) => {

    const { canScrollLeft, canScrollRight, scroll } = useCarouselContext();
    return (
        <section
            className={cn("flex justify-between items-center")}
        >
            <Text
                as='h3'
                variant='subHeading'
                className={cn('text-neutral-900 font-semibold', className)}
            >
                {title}
            </Text>

            {rightSlot ?? (
                <AnimatePresence>
                    {(canScrollLeft || canScrollRight) && (
                        <motion.div
                            initial={{ opacity: 0, x: 6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 6 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-3"
                        >
                            <ArrowButton
                                direction="left"
                                onClick={() => scroll("left")}
                                disabled={!canScrollLeft}
                            />
                            <ArrowButton
                                direction="right"
                                onClick={() => scroll("right")}
                                disabled={!canScrollRight}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </section>
    )
}

export default CarouselHeader