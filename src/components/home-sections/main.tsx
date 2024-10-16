'use client';
import { useRef } from 'react';
import { useCallPopupStore } from '@/store/call-popup';
import { m } from 'framer-motion';
import ArrowUpRightIcon from '@public/icons/arrow-up-right.svg';
import BarnhouseImage from '@public/images/barnhouse.webp';
import TownhouseImage from '@public/images/townhouse.webp';
import Button from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import MainTextSlider from '@/components/main-text-slider';

function MainSection() {
  const mainRef = useRef<HTMLElement | null>(null);
  const { setShowCallPopup } = useCallPopupStore();

  function handleClickOnPriceButton() {
    setShowCallPopup(true);
  }

  return (
    <main
      className='relative bg-[url("/images/bg.webp")] bg-no-repeat bg-cover bg-center pt-[128.4px] pb-[68px] sm:pb-[188px] -mt-[128.4px]'
      ref={mainRef}>
      <div className='relative z-10 mt-2 sm:mt-[140px] container text-white flex 2xl:justify-between flex-col 2xl:flex-row items-start gap-6 sm:gap-16'>
        <m.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeIn', duration: '0.42' }}
          className='max-w-[747px] w-full'>
          <MainTextSlider mainRef={mainRef} />
          <Button className='mt-6 sm:mt-8' onClick={handleClickOnPriceButton}>
            Узнать стоимость
          </Button>
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeIn', duration: '0.75' }}
          viewport={{ once: true }}
          className='w-full relative 2xl:grid 2xl:grid-cols-2 flex flex-row gap-0 overflow-x-auto'>
          <div className='flex-shrink-0 bg-green h-[176px] sm:h-[272px] aspect-square p-4 sm:p-6 flex flex-col justify-between'>
            <h3 className='font-gilroy font-extrabold text-[18px] sm:text-[22px] leading-[1.2] sm:leading-[1.3]'>
              Оформление рассрочки по ставке от 15% годовых
            </h3>
            <Link
              className='font-helvetica text-lg leading-5 font-normal inline-flex items-center gap-1 group w-max'
              href='/'>
              Подробнее
              <ArrowUpRightIcon className='transition group-hover:opacity-80' />
            </Link>
          </div>
          <div className='relative h-[176px] sm:h-[272px] aspect-square'>
            <Image
              src={BarnhouseImage}
              alt='барнхаус'
              placeholder='blur'
              fill
            />
            <div className='p-4 sm:p-6 absolute inset-0 bg-gradient-to-b from-black/50 to-black/0'>
              <h3 className='font-gilroy font-extrabold text-[18px] sm:text-[22px] leading-[1.2] sm:leading-[1.3]'>
                Барнхаусы
              </h3>
            </div>
          </div>
          <div className='relative h-[176px] sm:h-[272px] aspect-square order-last 2xl:order-none'>
            <Image
              src={TownhouseImage}
              alt='таунхаус'
              placeholder='blur'
              fill
            />
            <div className='p-4 sm:p-6 absolute inset-0 bg-gradient-to-b from-black/50 to-black/0'>
              <h3 className='font-gilroy font-extrabold text-[18px] sm:text-[22px] leading-[1.2] sm:leading-[1.3]'>
                Таунхаусы
              </h3>
            </div>
          </div>
          <div className='bg-green h-[176px] sm:h-[272px] aspect-square p-4 sm:p-6 flex flex-col justify-between 2xl:order-none'>
            <h3 className='font-gilroy font-extrabold text-[18px] sm:text-[22px] leading-[1.2] sm:leading-[1.3]'>
              Скидка до 5% при полной предоплате за проект
            </h3>
            <Link
              className='font-helvetica text-lg leading-5 font-normal inline-flex items-center gap-1 group w-max'
              href='/'>
              Подробнее{' '}
              <ArrowUpRightIcon className='transition group-hover:opacity-80' />
            </Link>
          </div>
        </m.div>
      </div>
      <div className='absolute inset-0 bg-black/30 z-0'></div>
    </main>
  );
}

export default MainSection;
