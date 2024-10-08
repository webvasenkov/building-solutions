import Link from 'next/link';
import cn from 'clsx';

type Props = {
  className?: string;
};

function Address({ className }: Props) {
  return (
    <Link
      className={cn('text-white/60 transition hover:text-white', className)}
      href='https://yandex.by/maps/-/CDXe6Ti1'
      target='_blank'>
      РБ, г. Минск, ул. Ленина, 1
    </Link>
  );
}

export default Address;
