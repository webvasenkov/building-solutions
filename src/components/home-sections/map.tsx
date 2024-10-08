'use client';
import { m } from 'framer-motion';

function Map() {
  return (
    <m.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeIn', duration: '0.42' }}
      className='relative mt-[140px] container'>
      <iframe
        className='w-full h-[480px] map'
        src='https://yandex.ru/map-widget/v1/?um=constructor%3A53fa520d9d5e15f171be1ba53f58e6247807c648e5acc576bb658663ec894f00&amp;source=constructor'></iframe>
    </m.section>
  );
}

export default Map;
