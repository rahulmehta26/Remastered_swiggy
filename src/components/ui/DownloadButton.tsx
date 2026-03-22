import { motion } from "motion/react";
import { cn } from "../../utils/cn";
import Text from "./Text";

interface DownloadButtonProps {
    icon?: React.ElementType;
    iconStyle?: string;
    title: string;
    subTitle: string
}

const DownloadButton = ({ icon: Icon, iconStyle, title, subTitle }: DownloadButtonProps) => {
    return (
        <motion.button
            className={cn(
                "w-full p-4 py-2",
                "bg-black",
                "rounded-sm cursor-pointer",
                "text-white",
                "flex items-center gap-4"
            )}
            type="button"
            whileTap={{
                scale: [0.995, 1.005, 1]
            }}
            transition={{
                duration: 0.15,
                ease: "easeInOut"
            }}
        >
            {
                Icon && <Icon className={cn("w-10 h-10", iconStyle)} />
            }

            <div
                className={cn("flex flex-col items-start")}
            >
                <Text
                    as="p"
                    variant="base"
                    className="text-sm text-white-muted"
                >
                    {subTitle}
                </Text>

                <Text
                    as="span"
                    className={cn("text-white font-bold text-2xl ")}
                >
                    {title}
                </Text>
            </div>


        </motion.button>
    )
}

export default DownloadButton 