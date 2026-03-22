import { useState } from "react";
import { cn } from "../../../utils/cn";
import { motion } from "motion/react";
import Text from "../Text";
import Ratings from "../../icons/Ratings";
import type { ImageProps } from "../../../types/image";

const ProductImage = ({
    src,
    alt,
    className = "",
    containerClassName = "",
    fallbackSrc = "/fallback.png",
}: ImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
        setImgSrc(fallbackSrc);
    };

    return (
        <div
            className={cn(
                "relative overflow-hidden",
                "h-52 w-full",
                containerClassName
            )}
        >
            <img
                src={imgSrc}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                onError={handleError}
                className={cn("w-full h-full object-cover", className)}
            />

            <motion.div
                variants={{
                    rest: { y: "100%" },
                    hover: { y: 0 },
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 0.6,
                }}
                className={cn(
                    "absolute bottom-0 left-0 right-0",
                    "bg-linear-to-t from-black via-black/80 to-transparent",
                    "flex flex-col justify-end p-2",
                    "pointer-events-none"
                )}
            >
                <div className="flex justify-between items-center">
                    <Text
                        as="h4"
                        variant="subHeading"
                        className={cn(
                            "w-[75%]",
                            "text-white font-semibold",
                        )}
                    >
                        Sobre Cafe and Bar
                    </Text>
                    <div className="flex items-center gap-2">
                        <Ratings className="w-4 h-4" />
                        <Text as="span" variant="tags" className="text-white font-extrabold">
                            4.5
                        </Text>
                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default ProductImage;
