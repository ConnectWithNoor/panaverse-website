'use client';

import Image from 'next/image';
import React from 'react';

import Button from '../{components}/button';

function Hero() {
  return (
    <section className='section'>
      <div className='flex flex-col md:flex-row jusify-between items-center'>
        <div className='flex flex-col justify-center'>
          <h4 className='text-sm font-light mt-4 underline decoration-emerald-200'>
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h4>
          <div className='flex flex-col justify-between'>
            <h3 className='text-5xl font-bold mt-8'>
              Become <span className='text-green-1'>Certified Web 3.0</span> and{' '}
              <span className='text-green-1'>Metaverse</span> Developer
            </h3>
            <p className='text-lg font-normal mt-5'>
              Launch Your Dev Career With Web 3 and Metaverse Getting Ready for
              the Next Generation of the Internet
            </p>
          </div>
          <div className='flex flex-col  items-center mt-3'>
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

        <div className='hidden md:block mt-32'>
          <Image
            src='/progamming.svg'
            width={500}
            height={500}
            alt='hero-image'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
