'use client';

import Image from 'next/image';

function City() {
  return (
    <section className='section'>
      <div className='text-center space-y-10 pb-8'>
        <h3 className='text-green-1 text-3xl font-bold'>Operational Cities</h3>
        <div className='flex flex-grow flex-wrap justify-center'>
          <Image src='/city-1.svg' width={200} height={200} alt='city' />
          <Image src='/city-2.svg' width={200} height={200} alt='city' />
          <Image src='/city-3.svg' width={200} height={200} alt='city' />
          <Image src='/city-4.svg' width={200} height={200} alt='city' />
        </div>
      </div>
    </section>
  );
}

export default City;
