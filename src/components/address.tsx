import Link from 'next/link';

function Address() {
  return (
    <Link className='text-white/60 transition hover:text-white' href='https://yandex.by/maps/-/CDXe6Ti1' target='_blank'>
      РБ, г. Минск, ул. Ленина, 1
    </Link>
  );
}

export default Address;
