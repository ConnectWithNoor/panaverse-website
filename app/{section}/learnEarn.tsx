import Image from 'next/image';
import React from 'react';

function LearnEarn() {
  return (
    <section className='section w-full md:mt-16'>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='w-3/4 scale-90'>
          <Image
            src={'/developer.svg'}
            width='300'
            height='300'
            alt='illustration'
          />
        </div>
        <div className='bg-gray-dark-1 p-6 rounded-lg text-center space-y-3'>
          <h3 className='text-green-1 font-bold text-3xl md:text-4xl'>
            The Program in a Nutshell
          </h3>
          <h3 className='text-green-1 text-xl md:text-2xl'>
            Earn While You Learn
          </h3>
          <p className='md:text-lg'>
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
