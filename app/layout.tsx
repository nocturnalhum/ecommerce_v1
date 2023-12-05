import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Navbar from './components/nav/Navbar2';
import Footer from './components/footer/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'MUJI Canada',
  description:
    'The official site for MUJI Canada, Ltd. Shop for home décor, ...15% off your first order when you sign up to our newsletter.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={`${roboto.className} text-slate-700`}>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow bg-slate-500'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
