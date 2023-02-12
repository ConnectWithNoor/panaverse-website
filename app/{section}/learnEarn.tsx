import Image from 'next/image';
import React from 'react';

function LearnEarn() {
  return (
    <section className='section w-full '>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='relative w-full h-[420px]'>
          <Image
            src={'/developer.svg'}
            width='300'
            height='300'
            alt='illustration'
            className='absolute top-5 right-16'
          />
          <Image
            src={'/wallet.svg'}
            width='120'
            height='120'
            alt='illustration'
            className='absolute top-3 right-28'
          />
          <Image
            src={'/money-bag.svg'}
            width='150'
            height='150'
            alt='illustration'
            className='absolute bottom-6 right-24'
          />
        </div>
        <div className='bg-gray-dark-1 p-6 rounded-lg text-center space-y-3'>
          <h3 className='text-green-1 font-bold text-3xl'>
            The Program in a Nutshell
          </h3>
          <h3 className='text-green-1 text-xl'>Earn While You Learn</h3>
          <p>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program&apos;s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LearnEarn;
