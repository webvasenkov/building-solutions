'use client';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import cn from 'clsx';

const slides = [
  {
    title:
      'Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией',
    text: 'Без головной боли и отклонений от сметы строительства',
  },
  {
    title:
      'Мы создаем надежные и современные дома для вашего уютного проживания',
    text: 'В своей работе мы применяем современные технологии и специализированное строительное оборудование',
  },
  {
    title:
      'В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет',
    text: 'Мы оперативно выполняем весь спектр строительных работ',
  },
];

type Props = {
  mainRef: React.MutableRefObject<null | HTMLElement>;
};

function MainTextSlider({ mainRef }: Props) {
  const [swiperClass, setSwiperClass] = useState<SwiperClass | null>(null);
  const [realIdx, setRealIdx] = useState<number>(0);

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
      {slides.map((slide, idx) => {
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
            {Array.from({ length: slides.length }).map((_, idx) => {
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
                    onClick={handleClickOnPaginationButton(idx)}
                  />
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
