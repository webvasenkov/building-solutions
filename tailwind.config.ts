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
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '90px',
      },
    },
  },
  plugins: [],
};
export default config;
