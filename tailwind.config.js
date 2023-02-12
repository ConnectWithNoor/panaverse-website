/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Josefin Sans', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        'green-1': '#11AD8E',
        'gray-light-1': '#F5F5F5',
      },
      backgroundColor: {
        'gray-light-1': '#F5F5F5',
        'gray-dark-1': '#121212',
        'bg-dark': '#09121D',
      },
      boxShadow: {
        'box-1': '0 4px 6px -6px #222',
      },
      borderColor: {
        'green-1': '#11AD8E',
      },
    },
  },
  plugins: [],
};
