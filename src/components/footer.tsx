import Logo from '@/components/logo';
import Address from '@/components/address';
import WorkingTime from '@/components/working-time';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='bg-green mt-[140px] text-white font-helvetica font-base'>
      <div className='container py-16 flex flex-col items-center text-center xl:text-left xl:items-start xl:flex-row'>
        <div>
          <Logo />
          <p className='mt-4 text-[14px] sm:text-base leading-[1.3] sm:leading-[1.4]'>
            © 2024 ООО “Строительные решения”
          </p>
        </div>
        <div className='xl:ml-[174px] mt-9 xl:mt-0'>
          <h3 className='font-bold text-base sm:text-lg leading-[1.2] sm:leading-[1.3]'>
            Адрес офиса
          </h3>
          <Address className='inline-block mt-3 sm:mt-4' />
          <WorkingTime className='mt-2' />
        </div>
        <div className='xl:ml-[166px] flex flex-col mt-6 xl:mt-0'>
          <p className='text-white/60 inline-flex flex-col text-[14px] sm:text-base leading-[1.3] sm:leading-[1.4]'>
            <span>ООО “Строительные решения”</span>
            <span>Юридический адрес:</span>
            <span>РБ, г. Минск, ул. Ленина, 1</span>
            <span>УНП: 111111111</span>
          </p>
          <Link
            href='https://web-space.by'
            target='_blank'
            className='mt-6 sm:mt-7 text-[14px] sm:text-base leading-[1.3] sm:leading-[1.4]'>
            Разработка сайта:{' '}
            <span className='font-bold text-orange mt-6 xl:mt-0'>
              Web-space.by
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
