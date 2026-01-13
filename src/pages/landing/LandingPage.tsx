import React, { useState } from 'react'
import Text from '../../components/ui/Text'
import { cn } from '../../utils/cn'
import Image01 from "../../assets/images/hero_image01.png";
import Image02 from "../../assets/images/hero_image02.png"
import Burger from "../../assets/images/hero_burger.png"
import SearchBox from '../../components/ui/SearchBox ';
import Location from '../../components/icons/Location';
import Chevron from '../../components/icons/Chevron';
import Search from '../../components/icons/Search';
import ServiceCategories from './ServiceCategories';

const LandingPage: React.FC = () => {

  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleToggled = () => {
    setIsToggled(prev => !prev);
  }

  return (
    <section className={cn(
      'min-h-screen relative w-full pt-20',
      "bg-primary"
    )} >

      <div
        className={cn("w-[76rem] relative mx-auto space-y-20")}
      >

        <Text
          as='h1'
          variant='hero'
          className=' text-center leading-[8rem]'
        >
          Order food & groceries. Discover<br /> <Text as='span' variant='hero' className='z-30 relative' >best restaurants. Swiggy it!</Text>
        </Text>

        <div
          className=' absolute z-10 -top-6 left-2/5 '
        >
          <img
            src={Burger}
            alt='Burger illustration'
            className={cn(" w-64 h-auto object-cover rotate-16 ")}
          />
        </div>

        <div
          className={cn(
            "w-full mx-auto",
            "grid grid-cols-12 gap-6",
            "justify-center items-center"
          )}
        >
          <SearchBox
            className={cn(" col-span-3 col-start-3")}
          >
            <Location className='fill-primary' />

            Your Location

            <Chevron
              isOpen={isToggled}
              className="fill-primary"
            />

          </SearchBox>

          <SearchBox
            className={cn(" col-span-5 ")}
          >

            <Text
              as='span'
              variant='base'
              className={cn("text-black/30 text-shadow-none font-semibold text-md")}
            >
              Search for restaurant, item or more
            </Text>

            <Search className={cn("fill-primary")} />
          </SearchBox>

        </div>

        <ServiceCategories />
      </div>

      <div
        className=' absolute z-10 top-16 left-0 '
      >
        <img
          src={Image01}
          alt='Burger illustration'
          className={cn(" w-72 h-auto object-cover")}
        />
      </div>

      <div
        className=' absolute z-10 top-16 right-0 '
      >
        <img
          src={Image02}
          alt='Burger illustration'
          className={cn(" w-72 h-auto object-cover")}
        />
      </div>

    </section>
  )
}

export default LandingPage