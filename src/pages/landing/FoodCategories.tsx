import React from 'react'
import CarouselHeader from '../../components/ui/carousel/CarouselHeader'
import { cn } from '../../utils/cn'
import { useFoodCategory } from '../../hooks/useFoodCategories'
import type { FoodCategory } from '../../types/FoodCategory'
import { SWIGGY_IMAGE_CDN } from '../../constant/cdn'
import { Carousel } from '../../components/ui/carousel/Carousel'

const FoodCategories = () => {

    const { data: categories } = useFoodCategory();

    return (
        <section
            className={cn(
                "page-container",
                "pt-24 pb-4"
            )}
        >

            <Carousel>
                <CarouselHeader title='Order our best food options' />

                <Carousel.Track>

                    <Carousel.Item>


                        <div
                            className={cn("flex justify-between overflow-hidden gap-4 my-2")}
                        >
                            {
                                categories?.splice(0, 10)?.map((category: FoodCategory) => <div key={category?.id} className={cn('w-40 h-48 shrink-0')} >
                                    <img src={SWIGGY_IMAGE_CDN + category?.imageId} className={cn('w-full h-full object-cover')} />
                                </div>)
                            }

                        </div>

                        <div
                            className={cn("flex justify-between overflow-hidden gap-4 my-2")}
                        >
                            {
                                categories?.splice(0, 10)?.map((category: FoodCategory) => <div key={category?.id} className={cn('w-40 h-48 shrink-0')} >
                                    <img src={SWIGGY_IMAGE_CDN + category?.imageId} className={cn('w-full h-full object-cover')} />
                                </div>)
                            }

                        </div>

                    </Carousel.Item>
                </Carousel.Track>

            </Carousel>

        </section>
    )
}

export default FoodCategories