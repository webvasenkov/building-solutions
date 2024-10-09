import { Path, UseFormRegister } from 'react-hook-form';
import { QuestionInputs } from '@/components/question-form';
import cn from 'clsx';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: Path<QuestionInputs>;
  register: UseFormRegister<QuestionInputs>;
}

function Input({ className, id, register, ...otherProps }: Props) {
  return (
    <input
      className={cn(
        'border border-dark-green py-4 sm:py-5 px-6 w-full font-helvetica text-base sm:text-lg leading-6 transition focus:outline-none focus:border-orange focus:text-dark-green placeholder:text-gray/60',
        className,
      )}
      {...otherProps}
      {...register(id)}
    />
  );
}

export default Input;
