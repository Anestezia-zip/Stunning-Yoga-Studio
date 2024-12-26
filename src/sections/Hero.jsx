import React from 'react'
import { Element, Link as LinkScroll } from "react-scroll";
import Button from '../components/Button';
import clsx from 'clsx'


const Hero = () => {
  return (
    <section className='relative pt-40 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
        <Element name="hero">
            <div className='container relative'>
                <div className='relative z-2 max-w-512 max-lg:max-w-388'>
                    <div className='caption small-2 uppercase text-p3'>
                        Yoga classes
                    </div>
                    <h1 className='mb-6 h2 text-p4 uppercase max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12'>
                        Transform your Mind and Body
                    </h1>
                    <p className='max-w-440 mb-8 body-1 max-md:-mb-12'>We designed Stunning Yoga Studio to be a peaceful retreat, simple to start, and surprisingly transformative.</p>
                    <LinkScroll to="features" offset={-100} spy smooth className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}>
                        <Button icon="/images/zap.svg">Try it now</Button>
                    </LinkScroll>
                </div>

                <div className='absolute top-0 right-[10%] max-w-[500px] pointer-events-none overflow-hidden'>
                    <img 
                        src="/images/hero-1.png" 
                        className='w-full h-auto max-lg:opacity-20' 
                        alt="hero" 
                        loading='lazy'
                    />
                </div>


            </div>
        </Element>
    </section>
  )
}

export default Hero