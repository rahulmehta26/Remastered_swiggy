import { motion } from "motion/react"
import { cn } from "../../../utils/cn"
import Text from "../Text";
import ProductImage from "./ProductImage";
import Ratings from "../../icons/Ratings";
import { SWIGGY_IMAGE_CDN } from "../../../constant/cdn";

interface ProductCardProps {
    image?: string;
    button?: boolean;
    titleClassName?: string;
    label?: boolean;
    rating?: string;
}

const ProductCard = ({ data }: any) => {

    console.log(data?.info)

    // const { areaName, claudinaryImageId: image, name, } = data?.info;
    return (
        <motion.section
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={cn(
                "bg-white w-96 overflow-hidden ",
                "border border-black/10",
                "rounded-md shadow-sm group"
            )}
        >

            {/* {
                1 && <ProductImage src={image + SWIGGY_IMAGE_CDN} alt={name} />
            } */}

            <div
                className={cn("p-4 space-y-3")}
            >

                <Text
                    as="p"
                    className={cn("text-neutral-900 text-shadow-2xs text-lg font-extrabold",)}
                >
                    Title
                </Text>

                {
                    1 && (
                        <div
                            className={cn("flex items-center gap-2")}
                        >

                            <Ratings className={("w-5 h-5")} />

                            <Text
                                variant="tags"
                                as="p"
                                className={cn("text-neutral-900 text-shadow-2xs text-lg",)}
                            >
                                4.2 • 30-35 mins
                            </Text>
                        </div>
                    )
                }

                <Text
                    as="p"
                    variant="tags"
                    className="text-muted text-shadow-2xs"
                >
                    Pizza
                </Text>

                {/* <Text
                    as="p"
                    variant="tags"
                    className="text-muted text-shadow-2xs"
                >
                    {areaName}
                </Text> */}

            </div>

        </motion.section>
    )
}

export default ProductCard