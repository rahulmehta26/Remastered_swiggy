import React from 'react'
import { cn } from '../../utils/cn'
import { SWIGGY_IMAGE_CDN } from '../../constant/cdn'
import { useFoodCategory } from '../../hooks/useFoodCategories'
import type { FoodCategory } from '../../types/FoodCategory'
import { Divider } from '../../components/ui/Divider'
import ProductCard from '../../components/ui/card/ProductCard'
import { Carousel } from '../../components/ui/carousel/Carousel'
import { useTopRestaurantChains } from '../../hooks/useTopRestaurantChains'

const Home = () => {

    const { data: categories } = useFoodCategory();

    const { data: topRestaurant } = useTopRestaurantChains();

    const topRestaurantTitle = topRestaurant?.title;

    const topRestaurantData = topRestaurant?.restaurantData;

    return (
        <section
            className={cn("page-container py-10")}
        >

            <Carousel>
                <Carousel.Header
                    title="What's on your mind?"
                    className={cn("font-extrabold text-black text-shadow-2xs ")}
                />

                <Carousel.Track className={cn("my-2")} gap={16}>
                    {categories?.map((category: FoodCategory, index: number) => (
                        <Carousel.Item
                            key={category.id}
                            index={index}
                            className={cn("w-40 h-48 cursor-pointer shrink-0")}
                        >
                            <img
                                src={SWIGGY_IMAGE_CDN + category.imageId}
                                alt="Food category"
                                className={cn("w-full h-full object-cover")}
                                draggable={false}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel.Track>
            </Carousel>

            <Divider className={cn("border-gray-200 my-16 border-[0.05rem]")} />

            <div
                className={cn("space-y-6")}
            >

                <Carousel>

                    <Carousel.Header
                        title={topRestaurantTitle}
                        className={cn("font-extrabold text-black text-shadow-2xs ")}
                    />

                    <Carousel.Track className='my-2' gap={16}>

                        <Carousel.Item
                            className={cn(
                                "flex items-center gap-8"
                            )}
                        >
                            {
                                topRestaurantData?.map((restaurant: any) => <ProductCard key={restaurant?.info?.id} data={restaurant} />)
                            }
                        </Carousel.Item>

                    </Carousel.Track>

                </Carousel>

            </div>

        </section>
    )
}

export default Home