import cn from 'clsx';

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function Button({ children, onClick, className }: Props) {
  return (
    <button
      className={cn(
        'bg-orange text-xl leading-6 font-gilroy py-4 px-8 transition hover:bg-light-orange hover:shadow-[0_0_8px_rgba(233,117,80,0.3)]',
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
