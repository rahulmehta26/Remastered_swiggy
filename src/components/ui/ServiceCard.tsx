import type { ReactNode } from 'react';
import { cn } from '../../utils/cn'

interface ServiceCardProps {
    className?: string;
    children: ReactNode;
}

const ServiceCard = ({ className, children }: ServiceCardProps) => {
    return (
        <section
            className={cn(
                "w-full min-h-[20rem] p-6",
                "bg-white rounded-md",
                className
            )}
        >
            {children}
        </section>
    )
}

export default ServiceCard