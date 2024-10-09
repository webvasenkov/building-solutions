import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import localFont from 'next/font/local';
import Header from '@/components/header';
import Footer from '@/components/footer';
import InitialWrapper from '@/components/initial-wrapper';

const involve = localFont({
  src: './fonts/InvolveMedium.otf',
  weight: '500',
  style: 'normal',
  variable: '--font-involve',
});

const gilroy = localFont({
  src: './fonts/GilroyExtraBold.woff',
  weight: '800',
  style: 'normal',
  variable: '--font-gilroy',
});

const helvetica = localFont({
  src: [
    { path: './fonts/HelveticaRegular.otf', weight: '400', style: 'normal' },
    { path: './fonts/HelveticaBold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-helvetica',
});

export const metadata: Metadata = {
  title: 'Строительные решения - строительная компания',
  openGraph: { images: '/images/room.webp' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body
        className={`${involve.variable} ${gilroy.variable} ${helvetica.variable}`}>
        <InitialWrapper>
          <Toaster position='top-center' duration={1260} richColors />
          <Header />
          {children}
          <Footer />
        </InitialWrapper>
      </body>
    </html>
  );
}
