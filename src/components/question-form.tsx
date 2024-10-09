import { questionSchema } from '@/app/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendMessageToTelegram } from '@/api/telegram';
import { createQuestionMessage } from '@/lib/telegram';
import { toast } from 'sonner';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';

export type QuestionInputs = {
  phone: string;
  comment?: string;
  'personal-info'?: boolean;
  'personal-info-2'?: boolean;
};

function QuestionForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuestionInputs>({
    resolver: yupResolver(questionSchema),
  });

  async function handleFromOnSubmit(data: QuestionInputs) {
    try {
      const message = createQuestionMessage(data);
      await sendMessageToTelegram(message);
      toast.success('Спасибо, ваша заявка отправлена!');
      reset();
    } catch {
      toast.error('Произошла ошибка, попробуйте еще раз.');
    }
  }

  return (
    <form
      className='mt-6 flex flex-col'
      onSubmit={handleSubmit(handleFromOnSubmit)}>
      <div className='flex sm:items-center justify-between flex-col sm:flex-row'>
        <label
          className='font-helvetica font-bold text-base sm:text-lg leading-[1.2] sm:leading-[1.3]'
          htmlFor='phone'>
          Телефон<span className='text-orange'>*</span>
        </label>
        <div className='ml-0 sm:ml-[145px] mt-2 sm:mt-0 relative w-full'>
          <Input
            id='phone'
            type='text'
            placeholder='+375 (99) 999-99-99'
            inputMode='numeric'
            register={register}
          />
          {errors?.phone && (
            <span className='top-0 -translate-y-full right-0 absolute block text-orange'>
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>
      <div className='mt-4 flex justify-between flex-col sm:flex-row'>
        <label
          className='sm:mt-5 font-helvetica font-bold sm:text-lg leading-[1.2] sm:leading-[1.3]'
          htmlFor='comment'>
          Комментарий
        </label>
        <Textarea
          className='ml-0 sm:ml-[108px] mt-2 sm:mt-0'
          placeholder='Ваш комментарий'
          id='comment'
          register={register}
        />
      </div>
      <div className='flex justify-between mt-6 sm:mt-8 sm:items-center flex-col sm:flex-row'>
        <div className='flex items-center gap-1 sm:gap-3'>
          <input
            id='personal-info'
            type='checkbox'
            {...register('personal-info')}
          />
          <label
            className='font-helvetica font-normal text-[14px] sm:text-base text-dark-green cursor-pointer leading-[1.3]'
            htmlFor='personal-info'>
            Согласие на обработку персональных данных
          </label>
        </div>
        <Button className='max-w-[231px] w-full mt-8 sm:mt-0' type='submit'>
          Отправить
        </Button>
      </div>
    </form>
  );
}

export default QuestionForm;
