import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { cn } from "../../utils/cn";
import Text from "../../components/ui/Text";
import Button from "../../components/ui/Button";
import { foodDeliveryCities } from "../../constant/cities";
import Chevron from "../../components/icons/Chevron";
import type { Variants } from "motion";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.04,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.025,
            staggerDirection: -1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 6, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
        opacity: 0,
        y: -4,
        scale: 0.97,
        transition: { duration: 0.18, ease: "easeIn" },
    },
};

const ServiceCities = () => {
    const [showAll, setShowAll] = useState<boolean>(false);

    const visibleCities = showAll
        ? foodDeliveryCities
        : foodDeliveryCities?.slice(0, 7);

    const handleShowMore = () => {
        setShowAll((prev) => !prev);
    };

    return (
        <section
            className={cn("page-container h-full max-w-5xl py-20", "overflow-hidden")}
        >
            <div className={cn("space-y-8")}>
                <Text as="h3" className={cn("text-2xl font-bold text-neutral-900")}>
                    Cities with food delivery
                </Text>

                <motion.div
                    layout
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <motion.div
                        className={cn("grid grid-cols-4 gap-4")}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence mode="popLayout" initial={false}>
                            {visibleCities?.map(({ name: city, slug }) => (
                                <motion.div
                                    key={slug}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    layout
                                >
                                    <Button
                                        variant="outline"
                                        title={`Order food online in ${city}`}
                                        textStyle={cn("text-neutral-700 text-sm")}
                                        className={cn("border-black/30 border-2 px-3 w-full")}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        <motion.div layout>
                            <Button
                                variant="outline"
                                title={showAll ? "Show Less" : "Show More"}
                                textStyle={cn("text-sm")}
                                className={cn("border-black/30 border-2 w-full")}
                                rightIcon={<Chevron isOpen={showAll} />}
                                rightIconStyle={cn("size-4 fill-primary")}
                                type="button"
                                onClick={handleShowMore}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceCities;
