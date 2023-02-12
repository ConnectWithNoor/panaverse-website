'use client';

import Marquee from 'react-fast-marquee';

const news = [
  'Admission for Q1 is closed.',
  'Quarter 2 of Panaverse will start from 8 Feb 2023.',
];

function TickerComponent() {
  return (
    <div className='flex items-center justify-center '>
      <p className='mr-3 font-bold'>Latest: </p>
      <Marquee
        gradient={false}
        delay={1}
        speed={40}
        pauseOnHover={true}
        gradientColor={[193, 245, 245]}
        gradientWidth={100}
        className='rounded-md mr-3'
      >
        {news.map((item, index) => (
          <p key={index} className='ml-5 underline'>
            {item}
          </p>
        ))}
      </Marquee>
    </div>
  );
}

export default TickerComponent;
