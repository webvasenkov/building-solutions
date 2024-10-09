'use client';
import { useCallPopupStore } from '@/store/call-popup';
import { AnimatePresence, m } from 'framer-motion';
import CloseIcon from '@public/icons/close.svg';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { QuestionInputs } from '@/components/question-form';
import { questionSchema } from '@/app/schema';
import { sendMessageToTelegram } from '@/api/telegram';
import { createQuestionMessage } from '@/lib/telegram';
import { toast } from 'sonner';

function CallPopup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuestionInputs>({
    resolver: yupResolver(questionSchema),
  });
  const { showCallPopup, setShowCallPopup } = useCallPopupStore();

  function handleClickOnCloseButton() {

    setShowCallPopup(false);
  }

  async function handleFromOnSubmit(data: QuestionInputs) {
    try {
      const message = createQuestionMessage(data);
      await sendMessageToTelegram(message);
      toast.success('Спасибо, ваша заявка отправлена!');
      reset();
      setShowCallPopup(false);
    } catch {
      toast.error('Произошла ошибка, попробуйте еще раз.');
    }
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
          <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:max-w-[660px] w-full z-20 px-[20px] sm:px-0 overflow-auto'>
            <m.div
              className='bg-white'
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ ease: 'easeInOut', duration: '0.42' }}>
              <div className='bg-[url("/images/room-2.webp")] bg-cover bg-no-repeat bg-center h-[140px] sm:h-[198px] w-full'>
                <button
                  className='absolute top-3 right-3 sm:top-4 sm:right-4 bg-dark-green/60 p-2 rounded-full'
                  onClick={handleClickOnCloseButton}>
                  <CloseIcon />
                  <span className='sr-only'>закрыть форму</span>
                </button>
              </div>
              <div className='px-4 sm:px-[116px] sm:text-center mx-auto text-dark-green pt-3 sm:pt-4 pb-4 sm:pb-8'>
                <h2 className='font-gilroy text-[20px] leading-[1.2] sm:text-[32px] sm:leading-[1.4]'>
                  Обратный звонок
                </h2>
                <p className='mt-2 sm:mt-1 text-[14px] sm:text-base'>
                  Заполните форму ниже, и наш специалист свяжется с вами
                  в ближайшее время.
                </p>
                <form
                  className='mt-3 sm:mt-6 flex flex-col'
                  onSubmit={handleSubmit(handleFromOnSubmit)}>
                  <div className='relative flex flex-col items-start gap-2 sm:gap-3'>
                    <label
                      className='font-helvetica font-bold text-base sm:text-lg leading-[1.2] sm:leading-[1.3]'
                      htmlFor='phone-2'>
                      Телефон<span className='text-orange'>*</span>
                    </label>
                    <Input
                      id='phone'
                      type='text'
                      placeholder='+375 (99) 999-99-99'
                      register={register}
                    />
                    {errors?.phone && (
                      <span className='top-1 sm:top-3 right-0 absolute block text-orange'>
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                  <div className='mt-3 sm:mt-4 flex flex-col items-start gap-2 sm:gap-3'>
                    <label
                      className='font-helvetica font-bold text-base sm:text-lg leading-[1.2] sm:leading-[1.3]'
                      htmlFor='comment-2'>
                      Комментарий
                    </label>
                    <Textarea
                      placeholder='Ваш комментарий'
                      id='comment'
                      register={register}
                    />
                  </div>
                  <div className='flex mt-3 sm:mt-6 flex-col items-start sm:items-center gap-3 sm:gap-6'>
                    <div className='flex items-center gap-3'>
                      <input
                        id='personal-info-2'
                        type='checkbox'
                        {...register('personal-info-2')}
                      />
                      <label
                        className='font-helvetica font-normal text-dark-green cursor-pointer text-[14px] sm:text-base leading-[1.3]'
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
