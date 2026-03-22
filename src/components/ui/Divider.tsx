import { cn } from "../../utils/cn"

export const Divider = ({ className }: { className?: string }) => {
    return (
        <div className={cn(
            "w-full border-b my-6 border-neutral-700",
            className
        )} />
    )
}
