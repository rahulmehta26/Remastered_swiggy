import React from 'react'
import { cn } from '../../utils/cn'
import Text from './Text';

interface LabelProps {
    className?: string;
    title: string;
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;

}

const Label = ({ className, title, leftIcon: LeftIcon, rightIcon: RightIcon }: LabelProps) => {
    return (
        <div
            className={cn(
                "w-fit py-0.5 px-4",
                "bg-neutral-700/10",
                "rounded-full",
                className
            )}
        >
            {
                LeftIcon && <LeftIcon />
            }

            <Text
                as='span'
                variant='micro'
                className={cn("text-neutral-700")}
            >
                {title}
            </Text>

            {
                RightIcon && <RightIcon />
            }
        </div>
    )
}

export default Label