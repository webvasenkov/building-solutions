'use client';
import { useCallPopupStore } from '@/store/call-popup';
import Logo from '@/components/logo';
import Address from '@/components/address';
import WorkingTime from '@/components/working-time';
import Link from 'next/link';
import PhoneIcon from '@public/icons/phone.svg';

function Header() {
  const { setShowCallPopup } = useCallPopupStore();

  function handleClickOnCallButton() {
    setShowCallPopup(true);
  }

  return (
    <header className='relative z-10 sm:border-b-white/60 sm:border-b'>
      <div className='container py-4 sm:py-6 flex justify-between items-center sm:items-start'>
        <Logo />
        <div className='flex gap-16 items-center'>
          <div className='hidden xl:flex flex-col gap-1 max-w-[145px]'>
            <h3 className='font-helvetica font-bold text-lg leading-[1.3] text-white'>
              Адрес офиса:
            </h3>
            <Address />
          </div>
          <div className='hidden lg:flex flex-col gap-1'>
            <Link
              className='font-helvetica font-bold text-lg leading-[1.3] text-white'
              href='tel:+375999999999'>
              +375 99 999 99 99
            </Link>
            <WorkingTime />
          </div>
          <button className='sm:hidden' onClick={handleClickOnCallButton}>
            <PhoneIcon />
            <span className='sr-only'>Заказать звонок</span>
          </button>
          <button
            className='hidden sm:block font-gilroy text-xl leading-6 text-white py-4 px-8 border-2 transition border-orange hover:bg-orange'
            onClick={handleClickOnCallButton}>
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
