import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <div className='bg-gray-dark-1 text-white'>
      <section className='section py-12'>
        <div className='flex flex-col space-y-10'>
          <div>
            <Image src={'/logo.svg'} width='150' height='150' alt='logo' />
          </div>
          <p>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
            Panaverse DAO is a movement to spread these technolgies globally. It
            is community of Web 3 and Metaverse developers, designers, trainers,
            startup founders and service providers.
          </p>
          <div className='flex space-x-5'>
            <a href='https://google.com'>
              <Image
                src='/github.svg'
                width='30'
                height='30'
                alt='social-icons'
              />
            </a>
            <a href='https://google.com'>
              <Image
                src='/youtube.svg'
                width='30'
                height='30'
                alt='social-icons'
              />
            </a>

            <a href='https://google.com'>
              <Image
                src='/twitter.svg'
                width='30'
                height='30'
                alt='social-icons'
              />
            </a>

            <a href='https://google.com'>
              <Image
                src='/discord.svg'
                width='30'
                height='30'
                alt='social-icons'
              />
            </a>
          </div>
        </div>
      </section>
      <div className='bg-green-1 text-white p-3 rounded-t-lg'>
        Designed and Developed by Noor Muhammad
      </div>
    </div>
  );
}

export default Footer;
