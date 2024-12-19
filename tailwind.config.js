/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
