import cn from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, className, ...otherProps }: Props) {
  return (
    <button
      className={cn(
        'bg-orange text-xl text-white leading-6 font-gilroy py-4 px-8 transition hover:bg-light-orange hover:shadow-[0_0_8px_rgba(233,117,80,0.3)]',
        className,
      )}
      {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
