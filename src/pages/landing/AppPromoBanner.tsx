import React from 'react'
import { cn } from '../../utils/cn'
import Text from '../../components/ui/Text'
import Swiggy from '../../components/icons/Swiggy'

const AppPromoBanner = () => {
    return (
        <section className="w-full bg-neutral-900">
            <div
                className={cn(
                    "max-w-5xl mx-auto py-8",
                    "grid grid-cols-12 gap-4"
                )}
            >
                <div className="col-span-8 space-y-6">

                    <div
                        className={cn(
                            "flex items-center gap-2"
                        )}
                    >

                        <Swiggy className={cn("w-8 h-8")} />

                        <Text
                            as='h2'
                            className={cn("text-primary text-shadow-xs font-bold text-lg")}
                        >
                            Swiggy
                        </Text>

                    </div>

                    <div>

                        <Text
                            as="h3"
                            className={cn(
                                "text-white text-[2.6rem] font-bold",
                                "text-shadow-sm"
                            )}
                        >
                            Get the Swiggy App now!
                        </Text>

                        <Text
                            as="p"
                            className={cn(
                                "text-muted-white text-lg",
                                "text-shadow-xs"
                            )}
                        >
                            For best offers and discounts curated specially for you.
                        </Text>
                    </div>

                </div>

                <div className="col-span-4">
                    {/* Right side content (QR / Phone image) */}
                </div>
            </div>
        </section>
    )
}

export default AppPromoBanner