import cn from 'clsx';

type Props = {
  className?: string;
};

function WorkingTime({ className }: Props) {
  return (
    <div className={cn('flex flex-col w-max text-white/60 gap-1 text-[14px] sm:text-base leading-[1.3] sm:leading-[1.4]', className)}>
      <p>
        пн – пт: с <time>09:00</time> до <time>18:00</time>
      </p>
      <p>
        сб – вс: с <time>10:00</time> до <time>16:00</time>
      </p>
    </div>
  );
}

export default WorkingTime;
