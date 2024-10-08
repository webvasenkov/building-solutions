'use client';
import { useCallPopupStore } from '@/store/call-popup';
import { AnimatePresence, m } from 'framer-motion';
import CloseIcon from '@public/icons/close.svg';
import Button from './button';

function CallPopup() {
  const { showCallPopup, setShowCallPopup } = useCallPopupStore();

  function handleClickOnCloseButton() {
    setShowCallPopup(false);
  }

  return (
    <AnimatePresence>
      {showCallPopup && (
        <>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: '0.42' }}
            className='fixed inset-0 bg-[#011B1B]/60 z-10'
            onClick={handleClickOnCloseButton}></m.div>
          <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[660px] w-full z-20'>
            <m.div
              className='bg-white '
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ ease: 'easeInOut', duration: '0.42' }}>
              <div className='bg-[url("/images/room-2.webp")] bg-cover bg-no-repeat bg-center h-[198px] w-full'>
                <button
                  className='absolute top-4 right-4 bg-dark-green/60 p-2 rounded-full'
                  onClick={handleClickOnCloseButton}>
                  <CloseIcon />
                  <span className='sr-only'>закрыть форму</span>
                </button>
              </div>
              <div className='max-w-[428px] text-center mx-auto text-dark-green py-4 pb-8'>
                <h2 className='font-gilroy text-[32px] leading-[1.4]'>
                  Обратный звонок
                </h2>
                <p className='mt-1'>
                  Заполните форму ниже, и наш специалист свяжется с вами
                  в ближайшее время.
                </p>
                <form className='mt-6 flex flex-col'>
                  <div className='flex flex-col items-start gap-3'>
                    <label
                      className='font-helvetica font-bold text-lg leading-[1.3]'
                      htmlFor='phone-2'>
                      Телефон<span className='text-orange'>*</span>
                    </label>
                    <input
                      className='border border-dark-green py-5 px-6 w-full font-helvetica text-lg leading-6 transition focus:outline-none focus:border-orange focus:text-dark-green placeholder:text-gray/60'
                      id='phone-2'
                      type='text'
                      placeholder='+375 (99) 999-99-99'
                    />
                  </div>
                  <div className='mt-4 flex flex-col items-start gap-3'>
                    <label
                      className='mt-5 font-helvetica font-bold text-lg leading-[1.3]'
                      htmlFor='comment-2'>
                      Комментарий
                    </label>
                    <textarea
                      className='border border-dark-green py-5 px-6 h-[120px] w-full font-helvetica text-lg leading-6 resize-none transition focus:outline-none focus:border-orange focus:text-dark-green placeholder:text-gray/60'
                      placeholder='Ваш комментарий'
                      id='comment-2'
                    />
                  </div>
                  <div className='flex mt-6 flex-col items-center gap-6'>
                    <div className='flex items-center gap-3'>
                      <input id='personal-info-2' type='checkbox' />
                      <label
                        className='font-helvetica font-normal text-base text-dark-green cursor-pointer'
                        htmlFor='personal-info-2'>
                        Согласие на обработку персональных данных
                      </label>
                    </div>
                    <Button className='max-w-[231px] w-full'>Отправить</Button>
                  </div>
                </form>
              </div>
            </m.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CallPopup;
