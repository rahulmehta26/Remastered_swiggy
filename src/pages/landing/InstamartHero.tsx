import React from 'react'
import CarouselHeader from '../../components/ui/carousel/CarouselHeader'
import { cn } from '../../utils/cn'
import ProductCard from '../../components/ui/card/ProductCard'

const InstamartHero = () => {
    return (
        <section
            className={cn(
                'page-container',
                "pb-6 space-y-8"
            )}
        >

            {/* <CarouselHeader title='Discover best restaurants' /> */}

            <ProductCard />
        </section>
    )
}

export default InstamartHero