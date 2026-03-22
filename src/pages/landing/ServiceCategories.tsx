import Badge from "../../components/ui/Badge"
import ServiceCard from "../../components/ui/ServiceCard"
import Text from "../../components/ui/Text"
import { cn } from "../../utils/cn"
import ArrowButton from "../../components/ui/ArrowButton"
import Service_Image01 from "../../assets/images/service_image01.png"
import Service_Image02 from "../../assets/images/service_image02.png"
import Service_Image03 from "../../assets/images/service_image03.png"
import { useNavigate } from "react-router-dom"

const ServiceCategories = () => {

    const navigate = useNavigate();
    return (
        <section
            className={cn(
                "grid grid-cols-12 gap-12"
            )}
        >
            <ServiceCard
                className={cn(
                    "relative col-span-4",
                    "flex flex-col justify-between",
                )}
            >

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
                    <ArrowButton onClick={() => navigate("/restaurants")} />
                </div>

                <img
                    src={Service_Image01}
                    className={cn(
                        "w-[15.5rem] h-auto",
                        "absolute right-0 bottom-0 "
                    )}
                />

            </ServiceCard>

            <ServiceCard className={cn("relative col-span-4 flex flex-col justify-between")} >

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

                <div className="relative" >
                    <ArrowButton />
                </div>

                <img
                    src={Service_Image02}
                    className={cn(
                        "w-[10rem] h-auto",
                        "absolute right-0 bottom-0 "
                    )}
                />
            </ServiceCard>

            <ServiceCard className={cn("relative col-span-4 flex flex-col justify-between")} >

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

                <div className="relative" >
                    <ArrowButton />

                </div>

                <img
                    src={Service_Image03}
                    className={cn(
                        "w-[12rem] h-auto",
                        "absolute right-0 bottom-0 "
                    )}
                />
            </ServiceCard>
        </section>
    )
}

export default ServiceCategories