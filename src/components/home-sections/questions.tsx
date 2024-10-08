'use client';
import { m } from 'framer-motion';
import RoomImage from '@public/images/room.webp';
import Image from 'next/image';
import QuestionForm from '@/components/question-form';

function Questions() {
  return (
    <m.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeIn', duration: '0.42' }}
      className='container grid grid-cols-2 gap-8 mt-[140px]'>
      <div className='relative'>
        <Image
          className='object-cover'
          src={RoomImage}
          alt='комната'
          placeholder='blur'
          fill
        />
      </div>
      <div className='text-dark-green'>
        <div className='max-w-[544px]'>
          <h2 className='font-gilroy font-extrabold text-[48px] leading-[1.3]'>
            Остались вопросы?
          </h2>
          <p className='mt-2 font-helvetica font-normal text-lg leading-[1.4]'>
            Заполните форму ниже, и наш специалист свяжется с вами в ближайшее
            время.
          </p>
        </div>
        <QuestionForm />
      </div>
    </m.section>
  );
}

export default Questions;
