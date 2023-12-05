import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import { Redressed } from 'next/font/google';

const redressed = Redressed({ subsets: ['latin'], weight: ['400'] });

export default function Navbar() {
  return (
    <div className='sticky top-0 w-full bg-slate-200 z-30 shadow-sm'>
      <div className='py-4 border-b'>
        <Container>
          <div className='flex items-center justify-between gap-3 laptop:gap-0'>
            <Link
              href='/'
              className={`${redressed.className} font-bold text-2xl`}
            >
              Muji
            </Link>
            <div className='hidden laptop:block'>Search</div>
            <div className='flex items-center gap-8 laptop:gap-12'>
              <div>CartCount</div>
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
