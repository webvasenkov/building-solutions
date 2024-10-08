import Logo from '@/components/logo';
import Address from './address';
import WorkingTime from './working-time';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='bg-green mt-[140px] text-white font-helvetica font-base'>
      <div className='container py-16 flex'>
        <div>
          <Logo />
          <p className='mt-4 leading-[1.4]'>
            © 2024 ООО “Строительные решения”
          </p>
        </div>
        <div className='ml-[174px]'>
          <h3 className='font-bold text-lg leading-[1.3]'>Адрес офиса</h3>
          <Address className='inline-block mt-4' />
          <WorkingTime className='mt-2' />
        </div>
        <div className='ml-[166px] flex flex-col gap-7'>
          <p className='text-white/60 inline-flex flex-col'>
            <span>ООО “Строительные решения”</span>
            <span>Юридический адрес:</span>
            <span>РБ, г. Минск, ул. Ленина, 1</span>
            <span>УНП: 111111111</span>
          </p>
          <Link href='https://web-space.by' target='_blank' className='mt-7'>
            Разработка сайта:{' '}
            <span className='font-bold text-orange'>Web-space.by</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
