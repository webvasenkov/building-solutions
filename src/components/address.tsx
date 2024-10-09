import Link from 'next/link';
import cn from 'clsx';

type Props = {
  className?: string;
};

function Address({ className }: Props) {
  return (
    <Link
      className={cn(
        'text-white/60 transition hover:text-white text-[14px] sm:text-base leading-[1.3] sm:leading-[1.4] flex sm:flex-col',
        className,
      )}
      href='https://yandex.by/maps/-/CDXe6Ti1'
      target='_blank'>
      <span>РБ, г. Минск,&nbsp;</span>
      <span>ул. Ленина, 1</span>
    </Link>
  );
}

export default Address;
