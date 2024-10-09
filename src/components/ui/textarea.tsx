import cn from 'clsx';
import { Path, UseFormRegister } from 'react-hook-form';
import { QuestionInputs } from '@/components/question-form';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: Path<QuestionInputs>;
  register: UseFormRegister<QuestionInputs>;
}

function Textarea({ className, id, register, ...otherProps }: Props) {
  return (
    <textarea
      className={cn(
        'border border-dark-green py-4 sm:py-5 px-6 h-[120px] w-full font-helvetica text-base sm:text-lg leading-6 resize-none transition focus:outline-none focus:border-orange focus:text-dark-green placeholder:text-gray/60',
        className,
      )}
      {...otherProps}
      {...register(id)}
    />
  );
}

export default Textarea;
