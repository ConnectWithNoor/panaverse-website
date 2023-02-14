import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

import Ticker from './ticker';

import Logo from '../../public/logo.svg';
import Button from './button';

function Header() {
  return (
    <header className='py-3 shadow-box-1 '>
      <div className='section'>
        <div className='flex justify-between'>
          <div className='w-4/6'>
            <Ticker />
          </div>
          <div className='flex gap-x-1'>
            <SocialIcon
              url='https://github.com/panaverse'
              style={{ width: 30, height: 30 }}
              bgColor='#F5F5F5'
            />
            <SocialIcon
              url='https://twitter.com/Panaverse_edu'
              style={{ width: 30, height: 30 }}
              bgColor='#F5F5F5'
            />
            <SocialIcon
              url='https://www.linkedin.com/company/panaverse/'
              style={{ width: 30, height: 30 }}
              bgColor='#F5F5F5'
            />
          </div>
        </div>

        <div className='flex items-center justify-between w-full space-x-2 mt-3 m-auto'>
          <div className='basis-1/5 justify-center'>
            <Link href='/'>
              <Image
                priority
                src={Logo}
                alt='panaverse_logo'
                className='object-cover'
              />
            </Link>
          </div>
          <div className='flex items-center space-x-4  basis-3/5 justify-center'>
            <div className='cursor-default text-xs md:text-lg'>About</div>
            <div className='relative group hover:cursor-pointer flex gap-1 items-center justify-center text-xs md:text-lg'>
              Tracks
              <Image
                priority
                src='/chevron-down.svg'
                width={10}
                height={10}
                alt='chevron-down'
              />
              <div className='absolute top-5 pt-4'>
                <ul className='flex bg-gray-light-1 text-black rounded-b-md flex-col group-hover:shadow-md group-hover:py-2 group-hover:border border-transparent duration-500 group-hover:border-transparent group-hover:max-h-80 max-h-0 overflow-hidden'>
                  <li className='px-3 py-2 whitespace-pre hover:bg-gray-300 hover:cursor-pointer hover:text-zinc-800'>
                    <Link href='#'>Web 3.0 and Metaverse Specialization</Link>
                  </li>

                  <li className='px-3 py-2 whitespace-pre hover:bg-gray-300 hover:cursor-pointer hover:text-zinc-800'>
                    <Link href='#'>Artificial Intelligence</Link>
                  </li>

                  <li className='px-3 py-2 whitespace-pre hover:bg-gray-300 hover:cursor-pointer hover:text-zinc-800'>
                    <Link href='#'>Cloud Native Computing</Link>
                  </li>
                  <li className='px-3 py-2 whitespace-pre hover:bg-gray-300 hover:cursor-pointer hover:text-zinc-800'>
                    <Link href='#'>Ambient Computing and IoT</Link>
                  </li>
                  <li className='px-3 py-2 whitespace-pre hover:bg-gray-300 hover:cursor-pointer hover:text-zinc-800'>
                    <Link href='#'>Network Programmability Specialization</Link>
                  </li>
                  <li className='px-3 py-2 whitespace-pre hover:bg-gray-300 hover:cursor-pointer hover:text-zinc-800'>
                    <Link href='#'>
                      Genomics and Bioinformatics Specialization
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='cursor-default text-xs md:text-lg'>FAQs</div>
          </div>
          <div className='basis-2/5 justify-end inline-flex'>
            <Button className='bg-green-1 text-white px-3 py-1 rounded-md'>
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
