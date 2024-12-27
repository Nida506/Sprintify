/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(0deg, rgba(255,43,213,0.8547794117647058) 21%, rgba(89,56,163,0.76234243697479) 53%, rgba(0,204,255,0.8491771708683473) 97%);',
      },
      fontFamily: {
        Roboto: ['Roboto', 'serif'],
      },
      colors: {
        purple: '#644A8E',
        blue: '#0a16bf',
        darkBlue: '#00008B',
      },
    },
  },
  plugins: [require('daisyui')],
};
