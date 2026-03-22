import React, { useState } from 'react'
import { cn } from '../../utils/cn'
import HeroSection from './HeroSection';
import FoodCategories from './FoodCategories';
import InstamartHero from './InstamartHero';
import AppPromoBanner from './AppPromoBanner';
import ServiceCities from './ServiceCities';

const LandingPage: React.FC = () => {

  return (
    <section className={cn(
      'min-h-screen relative w-full',
    )} >

      <HeroSection />

      <FoodCategories />

      <InstamartHero />

      <AppPromoBanner />

      <ServiceCities />

    </section>
  )
}

export default LandingPage