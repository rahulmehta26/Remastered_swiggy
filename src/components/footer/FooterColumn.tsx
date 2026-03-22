import { cn } from "../../utils/cn";
import Text from "../ui/Text";

type FooterLink = {
    name: string;
    url?: string;
};

type FooterSection = {
    title: string;
    links: FooterLink[];
};

export const FooterColumn = ({ data }: { data: FooterSection }) => {
    return (
        <div>
            <Text className={cn(
                "font-bold text-shadow-2xs text-lg text-neutral-900"
            )}>
                {data.title}
            </Text>

            <div className={cn("flex flex-col gap-3 mt-3")}>
                {data.links.map((link) => (
                    <Text key={link.name}
                        as="p"
                        className={cn(
                            "text-muted text-base text-shadow-2xs cursor-pointer",
                            "hover:text-primary transition-colors duration-300"
                        )}
                    >
                        {link.name}
                    </Text>
                ))}
            </div>
        </div>
    );
};