'use client';

import Image from 'next/image';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

const indicators = (index: number | undefined) => (
  <div
    className='w-2 h-2 bg-green-1 m-2 rounded-full cursor-pointer indicator '
    key={index}
  />
);

function Box() {
  return (
    <div className='bg-gray-dark-1 border-2  border-green-1 p-6 rounded-lg text-center space-y-3'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-y-3 gap-x-3'>
        <Image src='/student-1.svg' width={70} height={70} alt='student' />
        <div>
          <h4 className='text-green-1 underline font-bold'>Noor Muhammad</h4>
          <p className='font-thin'>Software Engineer</p>
        </div>
      </div>
      <p className='font-thin'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley.{' '}
      </p>
    </div>
  );
}

function Feedback() {
  return (
    <section className='section pb-12 feedback-gradient'>
      <div className='flex flex-col mt-20 text-center'>
        <div className='space-y-3 '>
          <h3 className='text-green-1 font-bold text-3xl'>Student Feedback</h3>
          <Slide
            duration={3000}
            indicators={indicators}
            arrows={false}
            infinite={true}
            easing='ease'
          >
            <Box />
            <Box />
            <Box />
            <Box />
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default Feedback;
