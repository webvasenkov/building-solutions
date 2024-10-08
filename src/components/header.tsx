'use client';
import Logo from '@/components/logo';
import Address from './address';
import WorkingTime from './working-time';
import Link from 'next/link';
import { useCallPopupStore } from '@/store/call-popup';

function Header() {
  const { setShowCallPopup } = useCallPopupStore();

  function handleClickOnCallButton() {
    setShowCallPopup(true);
  }

  return (
    <header className='relative z-10 border-b-white/60 border-b'>
      <div className='container py-6 flex justify-between items-start'>
        <Logo />
        <div className='flex gap-16 items-center'>
          <div className='flex flex-col gap-1 max-w-[145px]'>
            <h3 className='font-helvetica font-bold text-lg leading-[1.3] text-white'>
              Адрес офиса:
            </h3>
            <Address />
          </div>
          <div className='flex flex-col gap-1'>
            <Link
              className='font-helvetica font-bold text-lg leading-[1.3] text-white'
              href='tel:+375999999999'>
              +375 99 999 99 99
            </Link>
            <WorkingTime />
          </div>
          <button
            className='font-gilroy text-xl leading-6 text-white py-4 px-8 border-2 transition border-orange hover:bg-orange'
            onClick={handleClickOnCallButton}>
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
