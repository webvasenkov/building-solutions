import HouseIcon from '@public/icons/house.svg';

function Logo() {
  return (
    <div className='flex gap-1 items-end text-white'>
      <HouseIcon />
      <h1 className='font-helvetica font-bold inline-flex flex-col'>
        Строительные решения
        <span className='font-helvetica font-normal text-xs leading-[1.4]'>
          строительная компания
        </span>
      </h1>
    </div>
  );
}

export default Logo;
