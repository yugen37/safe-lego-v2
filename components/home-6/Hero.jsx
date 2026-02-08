'use client'
import Image from 'next/image'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import { useRef } from 'react'
import chatbotImage from '@/public/images/home-6-img/chatbot-hero.png'
import chatbotImageDark from '@/public/images/home-6-img/chatbot-hero-dark.png'
import chatbotImageShapeOne from '@/public/images/home-6-img/chatbot-hero-shape-1.png'
import chatbotImageShapeOneDark from '@/public/images/home-6-img/chatbot-hero-shape-1-dark.png'
import chatbotImageShapeTwo from '@/public/images/home-6-img/chatbot-hero-shape-2.png'
import chatbotImageShapeTwoDark from '@/public/images/home-6-img/chatbot-hero-shape-2-dark.png'
import useWhileInView from '@/hooks/useWhileInView'
import { fadeUpAnimation, fadeUpAnimationDelay } from '@/data/animation'
import { motion } from 'framer-motion'
import config from '@/config'
import Link from 'next/link'

const Hero = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)
  return (
    <section className="hero relative bg-white  pb-[140px] pt-[230px] dark:bg-dark-300 max-lg:pb-25 max-lg:pt-[160px] max-md:pb-[70px] ">
      <div className="container">
        <FadeUpAnimation className="relative z-10 grid grid-cols-12 items-center  max-lg:gap-y-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 ">
            <p className="mb-8 font-medium uppercase max-lg:mb-4">{config.profession.pluralCapitalized.toUpperCase()}</p>
            <h1 className="mb-12 max-md:mb-8">
              Find a Verified <br />
              {config.profession.singularCapitalized} Near You
            </h1>
            <p className="mb-12 max-md:mb-8">
              Connect with trusted, certified {config.profession.plural} in your area. Our directory features only verified professionals to help you find the right {config.profession.service} expert for your needs.
            </p>
            <Link href="/directory" className="btn inline-block">
              Find Now
            </Link>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-7 xl:ml-25">
            <div className="align-center relative flex justify-center ">
              <div>
                <div className="absolute left-1/2 top-1/2 -z-10 flex w-full -translate-x-1/2 -translate-y-1/2 max-md:flex-col">
                  <div className="h-[502px] w-full  rounded-full bg-primary-200/25 blur-[145px]"></div>
                </div>
                <div className="relative h-[566px] w-[296px] md:h-[375px] md:w-[200px] lg:h-[566px] lg:w-[296px]">
                  <motion.div
                    initial="initial"
                    ref={ref}
                    animate={controlAnimation}
                    variants={fadeUpAnimation}
                    className="h-full w-full">
                    <Image src={chatbotImage} alt="chatbot-hero-dark" className="h-full w-full dark:hidden" />
                    <Image
                      src={chatbotImageDark}
                      alt="chatbot-hero-dark"
                      className="hidden h-full w-full dark:inline-block"
                    />
                  </motion.div>
                  <motion.div
                    initial="initial"
                    ref={ref}
                    animate={controlAnimation}
                    variants={fadeUpAnimationDelay}
                    className="absolute left-[-220px] top-[170px] max-1xl:left-[-120px] max-1xl:h-[300px] max-1xl:w-[300px] max-lg:-left-25 max-lg:top-[90px] max-lg:w-[200px] max-md:top-[170px] max-md:h-auto max-md:w-auto max-xs:left-[-30px] max-xs:top-[230px] ">
                    <Image src={chatbotImageShapeOne} alt="shapes" className="dark:hidden" />
                    <Image src={chatbotImageShapeOneDark} alt="shapes" className=" hidden dark:inline-block " />
                  </motion.div>
                  <motion.div
                    initial="initial"
                    ref={ref}
                    animate={controlAnimation}
                    variants={fadeUpAnimationDelay}
                    className="absolute right-[-100px] top-[150px]  max-1xl:w-[220px] max-lg:top-[90px] max-lg:w-[180px] max-md:top-[150px] max-md:h-auto max-md:w-auto max-xs:right-[-40px]">
                    <Image src={chatbotImageShapeTwo} alt="shapes" className="dark:hidden" />
                    <Image src={chatbotImageShapeTwoDark} alt="shapes" className=" hidden dark:inline-block " />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </FadeUpAnimation>
      </div>
    </section>
  )
}

export default Hero
