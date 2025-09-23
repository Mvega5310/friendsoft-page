'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

interface IndustryCard {
  icon: string
  title: string
  subtitle: string
}

const IndustriesSection: React.FC = () => {
  const { t } = useTranslation()

  const industries: IndustryCard[] = [
    {
      icon: '/icons/home/section8.icon1.svg',
      title: t('home.section8.industries.banking.title'),
      subtitle: t('home.section8.industries.banking.subtitle'),
    },
    {
      icon: '/icons/home/section8.icon2.svg',
      title: t('home.section8.industries.healthcare.title'),
      subtitle: t('home.section8.industries.healthcare.subtitle'),
    },
    {
      icon: '/icons/home/section8.icon3.svg',
      title: t('home.section8.industries.education.title'),
      subtitle: t('home.section8.industries.education.subtitle'),
    },
    {
      icon: '/icons/home/section8.icon4.svg',
      title: t('home.section8.industries.manufacturing.title'),
      subtitle: t('home.section8.industries.manufacturing.subtitle'),
    },
    {
      icon: '/icons/home/section8.icon5.svg',
      title: t('home.section8.industries.markets.title'),
      subtitle: t('home.section8.industries.markets.subtitle'),
    }
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4" style={{ backgroundColor: '#7B43D6' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-start mb-6 sm:mb-8 md:mb-12 ml-0 sm:ml-[5.5rem]">
          <p className="text-white/80 text-xs sm:text-sm font-medium mb-2 sm:mb-3 md:mb-4 tracking-wide uppercase">
            {t('home.section8.subtitle')}
          </p>
          <h2 className="text-white !text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-5xl !font-bold !leading-tight max-w-2xl px-2">
            {t('home.section8.title')}
          </h2>
        </div>

        {/* Mobile View - Vertical List */}
        <div className="block sm:hidden space-y-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex items-center space-x-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center">
                <Image
                  src={industry.icon}
                  alt={industry.title}
                  className="w-12 h-12"
                  width={48}
                  height={48}
                />
              </div>

              {/* Title and Subtitle */}
              <div className="flex-grow">
                <h3 className="text-black text-lg font-semibold mb-1">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {industry.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and Desktop View - Original Grid */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white w-36 h-44 md:w-44 md:h-48 lg:w-44 lg:h-48 xl:w-52 xl:h-52 rounded-lg flex flex-col items-center justify-center text-center p-4 md:p-4 lg:p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-2 md:mb-3 lg:mb-2">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                    width={80}
                    height={80}
                  />
                </div>

                {/* Title and Subtitle */}
                <div className="text-center">
                  <h3 className="text-black text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-tight mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm lg:text-sm xl:text-base leading-tight">
                    {industry.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection