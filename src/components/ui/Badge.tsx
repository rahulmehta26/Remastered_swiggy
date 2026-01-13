import { cn } from '../../utils/cn'
import Text from './Text'

interface BadgeProps {
    title: string;
    className?: string;
    textStyle?: string
}

const Badge = ({ title, className, textStyle }: BadgeProps) => {
    return (
        <section
            className={cn(
                "w-fit rounded-full px-4 py-1",
                "bg-linear-to-r from-primary/20 via-primary/10 to-primary/0",
                className
            )}
        >
            <Text
                as='span'
                variant='tags'
                className={cn("text-primary font-bold text-md", textStyle)}
            >
                {
                    title
                }
            </Text>
        </section>
    )
}

export default Badge