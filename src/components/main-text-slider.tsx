'use client';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import cn from 'clsx';
import { mainTextSlides } from '@/lib/dummy-data';

type Props = {
  mainRef: React.MutableRefObject<null | HTMLElement>;
};

function MainTextSlider({ mainRef }: Props) {
  const [swiperClass, setSwiperClass] = useState<SwiperClass | null>(null);
  const [realIdx, setRealIdx] = useState<number>(0);
  const paginationButtons = Array.from({ length: mainTextSlides.length });

  function handleOnRealIndexChange(swiperClass: SwiperClass) {
    setRealIdx(swiperClass.realIndex);
  }

  function handleClickOnPaginationButton(slideIdx: number) {
    return () => {
      if (swiperClass) {
        swiperClass.slideTo(slideIdx);
      }
    };
  }

  return (
    <Swiper
      onInit={setSwiperClass}
      slidesPerView={1}
      onRealIndexChange={handleOnRealIndexChange}
      autoplay={{ delay: 6000 }}
      modules={[Autoplay]}>
      {mainTextSlides.map((slide, idx) => {
        return (
          <SwiperSlide className='cursor-default' key={idx}>
            <h2 className='font-involve font-medium text-[28px] lg:text-[36px] xl:text-[64px] leading-[1.2] sm:leading-[1.3]'>
              {slide.title}
            </h2>
            <p className='font-helvetica font-normal mt-3 sm:mt-4 text-base sm:text-[26px] leading-[1.3] sm:leading-[1.4]'>
              {slide.text}
            </p>
          </SwiperSlide>
        );
      })}
      {mainRef.current &&
        createPortal(
          <ul className='absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-16 flex gap-3 items-center z-10'>
            {paginationButtons.map((_, idx) => {
              const isActiveSlide = realIdx == idx;

              return (
                <li key={idx}>
                  <button
                    className={cn(
                      'rounded-full transition hover:bg-light-orange',
                      {
                        'bg-orange w-6 h-2': isActiveSlide,
                        'bg-white w-2 h-2': !isActiveSlide,
                      },
                    )}
                    onClick={handleClickOnPaginationButton(idx)}>
                    <span className='sr-only'>кнопка пагинации #{idx}</span>
                  </button>
                </li>
              );
            })}
          </ul>,
          mainRef.current,
        )}
    </Swiper>
  );
}

export default MainTextSlider;
