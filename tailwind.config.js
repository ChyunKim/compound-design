/** @type {import('tailwindcss').Config} */

const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        gray000: '#000',
        gray900: '#101010',
        gray800: '#303030',
        gray700: '#505050',
        gray600: '#707070',
        gray500: '#909090',
        gray400: '#A0A0A0',
        gray300: '#C0C0C0',
        gray250: '#D8D8D8',
        gray200: '#E0E0E0',
        gray150: '#E8E8E8',
        gray100: '#F0F0F0',
        gray050: '#F5F5F5',
        gray025: '#F8F8F8',
        grayfff: '#fff',
        primary500: '#4D7FE5',
        primary400: '#7199EA',
        primary300: '#A8C5FF',
        primary200: '#E1EBFF',
        primary100: '#F1F5FD',
      },
      borderRadius: {
        circle: '50%',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
