'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

function Partner() {
  return (
    <section className='section'>
      <div className='text-center space-y-10 pb-8'>
        <h3 className='text-green-1 text-3xl font-bold'>Our Partners</h3>
        <div>
          <Marquee
            // gradient={false}
            delay={1}
            speed={40}
            pauseOnHover={true}
            gradientColor={[193, 245, 245]}
            gradientWidth={20}
            className='rounded-md mr-12'
          >
            {Array.from({ length: 7 }).map((_, index) => (
              <Image
                key={index}
                src={`partner-${index + 1}.svg`}
                alt='partner'
                width={120}
                height={120}
                className='mx-5 py-12 overflow-hidden'
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Partner;
