'use client';

import Image from 'next/image';
import React from 'react';

import Button from '../{components}/button';

function Hero() {
  return (
    <section className='section'>
      <div className='flex flex-col md:flex-row items-center gap-x-5 gap-y-6'>
        <div className='flex flex-col items-start justify-center md:basis-2/3 gap-y-6 '>
          <h4 className='text-sm md:text-base font-light underline decoration-emerald-200'>
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h4>
          <h3 className='text-3xl md:text-4xl font-bold '>
            Become <span className='text-green-1'>Certified Web 3.0</span> and{' '}
            <span className='text-green-1'>Metaverse</span> Developer
          </h3>
          <p className='text-base font-normal md:text-lg '>
            Launch Your Dev Career With Web 3 and Metaverse Getting Ready for
            the Next Generation of the Internet
          </p>
          <div className='flex flex-col  items-center '>
            <Image
              src='/chevron-down.svg'
              width={30}
              height={30}
              alt='chevron-down'
              className='duration-300 animate-bounce'
            />
            <Button className='bg-green-1 font-bold mt-3 text-white px-7 py-3 rounded-md'>
              Enroll Now
            </Button>
          </div>
        </div>
        <div className='hidden md:flex justify-end md:basis-2/3 max-h-[350px] '>
          <Image
            src='/progamming.svg'
            width={600}
            height={600}
            alt='hero-image'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
