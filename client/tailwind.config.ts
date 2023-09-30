import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#1a202c',
      },
      colors: {
        primary: '#1a202c',
      },
    },
    fontFamily: {
      chomsky: ['Chomsky', 'georgia', 'serif'],
    },
  },
  plugins: [],
};
export default config;
