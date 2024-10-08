import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        involve: 'var(--font-involve)',
        gilroy: 'var(--font-gilroy)',
        helvetica: 'var(--font-helvetica)',
      },
      colors: {
        white: '#FBFDFD',
        orange: '#E97550',
        green: '#114142',
        gray: '#848484',
        'dark-green': '#063536',
        'light-orange': '#F39779',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1356px',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
