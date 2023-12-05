import { PiEnvelopeThin } from 'react-icons/pi';
import { IoCart, IoSearchOutline } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { links } from '@/app/data/sitelinks';
import { Roboto_Condensed } from 'next/font/google';

const roboto_condense = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function Navbar() {
  return (
    <>
      <header className='sticky top-0 left-0 w-full z-30'>
        <div className='w-full text-[#363636]'>
          <div className='relative flex items-center h-full w-full'>
            <div className='relative flex flex-col items-center justify-center w-full desktop:flex-row px-3 tablet:px-[3.5rem] laptop:px-[3rem] desktop:px-[1rem] desktop:pr-[2rem] duration-300'>
              {/* =====<<< MENU BUTTON >>>========================================================================= */}
              <button className='absolute left-0 top-4 px-3 cursor-pointer bg-transparent desktop:hidden'>
                <RxHamburgerMenu size={28} />
              </button>
              {/* =====<<< SEARCH ICON >>>========================================================================= */}
              <button className='absolute left-8 top-4 pl-4 cursor-pointer bg-transparent laptop:hidden'>
                <IoSearchOutline size={28} />
              </button>
              {/* =====<<< CART ICON >>>=========================================================================== */}
              <div className='absolute right-0 top-2 desktop:top-6 h-12 flex items-center w-12 cursor-pointer'>
                <Link href='/'>
                  <span className='absolute top-1 right-1 flex items-center justify-center p-2 leading-3 text-center text-white text-[0.6875rem] h-5 w-5 rounded-full border-2 bg-[#7f0019]'>
                    1
                  </span>
                  <IoCart size={34} />
                </Link>
              </div>
              <div className='flex flex-grow w-full ml-2 mb-2 tablet:mb-0 laptop:pt-2'>
                {/* =====<<< LOGO >>>=============================================================================== */}
                <Link
                  href='/'
                  className='flex items-center justify-center mx-auto pt-4 pb-1 tablet:pt-0.5 tablet:pb-0 desktop:mx-0'
                >
                  <h1 className='text-[1.6rem] font-extrabold -tracking-wider text-black'>
                    MUJI
                  </h1>
                  <h2 className='font-extrabold text-[0.65rem] pl-1 w-12'>
                    無印良品
                  </h2>
                </Link>
                {/* =====<<< SEARCH BAR >>>========================================================================= */}
                <div className='relative hidden h-12 mx-3 border border-slate-300 rounded-md laptop:block w-full'>
                  <div className='flex h-full hover:shadow-lg hover:shadow-neutral-200/50'>
                    <div className='flex justify-evenly items-center bg-neutral-200 h-full w-40 text-[0.9rem] text-gray-600 tracking-wide'>
                      All categories
                      <GoChevronDown size={15} />
                    </div>
                    <input
                      type='text'
                      placeholder='What are you looking for?'
                      className='tracking-wide pl-2 w-full ring-0 focus:outline-none'
                    />
                    <div className='absolute top-0 right-0 h-full w-14 flex items-center justify-center text-white bg-[#7f0019] rounded-r-sm'>
                      <IoSearchOutline size={25} />
                    </div>
                  </div>
                </div>
              </div>
              {/* =====<<< MAIL SUBSCRIBE >>>======================================================================= */}
              <div className='flex items-center justify-center w-full pt-2.5 pr-4.5 pb-0.5 mx-2 mb-16 border-t border-neutral-700/20 text-[0.766rem] font-normal tablet:mt-0 laptop:pl-0 laptop:border-t-0 desktop:flex-row desktop:w-[300px] desktop:mt-2 desktop:mb-0'>
                <span className=''>
                  <PiEnvelopeThin size={36} className='h-5 desktop:h-8' />
                </span>
                <div className='flex desktop:flex-col'>
                  <span className='flex flex-wrap'>MUJI Mail</span>
                  <span className='flex desktop:w-[200px]'>
                    Subscribe to our newsletter! 15% off your first purchase!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full mx-auto p-6 mb-12 hidden capitalize desktop:flex justify-between'>
            <div
              className={`${roboto_condense.className} flex flex-wrap gap-[1.6rem] items-center leading-4 tracking-[0.01em] text-neutral-800 font-normal`}
            >
              <div>rewards</div>
              {links.map((link) => {
                return (
                  <div
                    key={link.id}
                    className={`flex items-center justify-center ${
                      link.category === 'sale' && 'text-[#7f0019] font-bold'
                    }`}
                  >
                    {link.category}
                    <GoChevronDown size={14} className='mt-1 ml-0.5' />
                  </div>
                );
              })}
            </div>
            <div className='flex gap-7 text-xs font-bold text-[#565656] mx-4 ml-6'>
              <span>wishlist</span>
              <span>login</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
