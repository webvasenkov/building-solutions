function WorkingTime() {
  return (
    <div className='flex flex-col w-max text-white/60 gap-1'>
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
