import Button from '@/components/button';

function QuestionForm() {
  return (
    <form className='mt-6'>
      <div className='flex items-center justify-between'>
        <label
          className='font-helvetica font-bold text-lg leading-[1.3]'
          htmlFor='phone'>
          Телефон<span className='text-orange'>*</span>
        </label>
        <input
          className='border border-dark-green py-5 px-6 max-w-[428px] w-full font-helvetica text-lg leading-6 transition focus:outline-none focus:border-orange focus:text-dark-green placeholder:text-gray/60'
          id='phone'
          type='text'
          placeholder='+375 (99) 999-99-99'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <label
          className='mt-5 font-helvetica font-bold text-lg leading-[1.3]'
          htmlFor='comment'>
          Комментарий
        </label>
        <textarea
          className='border border-dark-green py-5 px-6 max-w-[428px] h-[120px] w-full font-helvetica text-lg leading-6 resize-none transition focus:outline-none focus:border-orange focus:text-dark-green placeholder:text-gray/60'
          placeholder='Ваш комментарий'
          id='comment'
        />
      </div>
      <div className='flex justify-between mt-8 items-center'>
        <div className='flex items-center gap-3'>
          <input id='personal-info' type='checkbox' />
          <label
            className='font-helvetica font-normal text-base text-dark-green cursor-pointer'
            htmlFor='personal-info'>
            Согласие на обработку персональных данных
          </label>
        </div>
        <Button className='max-w-[231px] w-full'>Отправить</Button>
      </div>
    </form>
  );
}

export default QuestionForm;
