/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f5cdd3',
          300: '#efa4af',
          400: '#e77083',
          500: '#db4460',
          600: '#c62b4a',
          700: '#a61e3b',
          800: '#8b1b35',
          900: '#771b31',
        },
        gold: {
          50: '#fdfbe9',
          100: '#fbf5c6',
          200: '#f8eb8f',
          300: '#f5db4d',
          400: '#f3cc1f',
          500: '#e7b50c',
          600: '#c68e07',
          700: '#9c670a',
          800: '#815110',
          900: '#6f4312',
        },
      },
    },
  },
  plugins: [],
};