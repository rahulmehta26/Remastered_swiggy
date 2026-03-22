import React, { useState } from 'react'
import type { ImageProps } from '../../types/image'
import { cn } from '../../utils/cn';

const Image = ({
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
        <img
            src={imgSrc}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={handleError}
            className={cn("w-full h-full object-cover", className)}
        />
    )
}

export default Image