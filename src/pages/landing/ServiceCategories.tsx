import { motion } from "motion/react"
import RightArrow from "../../components/icons/RightArrow"
import Badge from "../../components/ui/Badge"
import ServiceCard from "../../components/ui/ServiceCard"
import Text from "../../components/ui/Text"
import { cn } from "../../utils/cn"

const ServiceCategories = () => {
    return (
        <section
            className={cn(
                "grid grid-cols-12 gap-12"
            )}
        >
            <ServiceCard className={cn("col-span-4 flex flex-col justify-between")} >

                <div
                    className={cn(" space-y-2 ")}
                >

                    <Text
                        as="h3"
                        variant="heading"
                        className={cn("text-neutral-700 font-extrabold text-4xl")}
                    >
                        FOOD DELIVERY
                    </Text>

                    <Text
                        as="h4"
                        variant="subHeading"
                        className={cn("text-neutral-700/50 text-2xl")}
                    >
                        FROM RESTUARANTS
                    </Text>

                    <Badge title="UPTO 60% OFF" />

                </div>

                <div>
                    <motion.button
                        whileHover="hover"
                        initial="initial"
                        className={cn(
                            "w-12 h-12",
                            "bg-primary rounded-full",
                            "flex justify-center items-center",
                            "cursor-pointer"
                        )}
                        type="button"
                    >
                        <RightArrow className={cn("stroke-white stroke-2 size-8")} />

                    </motion.button>
                </div>

            </ServiceCard>

            <ServiceCard className={cn("col-span-4")} >

                <div
                    className={cn(" space-y-2 ")}
                >

                    <Text
                        as="h3"
                        variant="heading"
                        className={cn("text-neutral-700 font-extrabold text-4xl")}
                    >
                        INSTAMART
                    </Text>

                    <Text
                        as="h4"
                        variant="subHeading"
                        className={cn("text-neutral-700/50 text-2xl")}
                    >
                        INSTANT GROCERY
                    </Text>

                    <Badge title="UPTO 60% OFF" />

                </div>
            </ServiceCard>

            <ServiceCard className={cn("col-span-4")} >

                <div
                    className={cn(" space-y-2 ")}
                >

                    <Text
                        as="h3"
                        variant="heading"
                        className={cn("text-neutral-700 font-extrabold text-4xl")}
                    >
                        DINEOUT
                    </Text>

                    <Text
                        as="h4"
                        variant="subHeading"
                        className={cn("text-neutral-700/50 text-2xl")}
                    >
                        EAT OUT & SAVE MORE
                    </Text>

                    <Badge title="UPTO 50% OFF" />

                </div>
            </ServiceCard>
        </section>
    )
}

export default ServiceCategories