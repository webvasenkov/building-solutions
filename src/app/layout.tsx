import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/header';
import localFont from 'next/font/local';

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
        <Header />
        {children}
      </body>
    </html>
  );
}
