import Image from 'next/image';
import React from 'react';

function Box({
  title,
  image,
  paragraph,
}: {
  title: string;
  image: string;
  paragraph: string;
}) {
  return (
    <div className='bg-gray-dark-1 border-2 border-green-1 p-6 rounded-lg text-center md:w-2/5 md:mx-auto space-y-3'>
      <h5 className='text-green-1 text-lg md:text-xl'>{title}</h5>
      <div className='flex flex-col gap-3 items-center text-sm md:text-base lg:text-lg'>
        <Image src={image} height={100} width={100} alt='icon' />
        <p className='text-base'>{paragraph}</p>
      </div>
    </div>
  );
}

function Join() {
  return (
    <section className='section md:mt-16'>
      <div className='flex flex-col mt-20 text-center'>
        <div className='space-y-3'>
          <h3 className='text-green-1 font-bold text-3xl md:text-4xl'>
            Why to join
          </h3>
          <p className='md:text-lg'>
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the program&apos;s beginning. It resembles a
            cross between a corporate venture and an educational project.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row space-4 gap-4 mt-10 w-fit flex-wrap'>
        <Box
          title='Product Owner'
          image='/power-man.svg'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero sapiente error eius, dicta, excepturi iste iure repellendus ut ea quas ducimus quo, aut delectus quasi quibusdam quisquam tempore necessitatibus.'
        />
        <Box
          title='Freelance'
          image='/credit-card.svg'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero sapiente error eius, dicta, excepturi iste iure repellendus ut ea quas ducimus quo, aut delectus quasi quibusdam quisquam tempore necessitatibus.'
        />
        <Box
          title='Access to Global Market by DAO'
          image='/globe.svg'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero sapiente error eius, dicta, excepturi iste iure repellendus ut ea quas ducimus quo, aut delectus quasi quibusdam quisquam tempore necessitatibus.'
        />
        <Box
          title='Boost Economy'
          image='/progress.svg'
          paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis libero sapiente error eius, dicta, excepturi iste iure repellendus ut ea quas ducimus quo, aut delectus quasi quibusdam quisquam tempore necessitatibus.'
        />
      </div>
    </section>
  );
}

export default Join;
