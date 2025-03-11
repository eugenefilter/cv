/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robot: ['Roboto-thin', 'sans-serif'],
        robotBold: ['Roboto-medium', 'sans-serif'],
      },
      colors: {
        black: {
          50: 'rgba(191,191,191, .5)',
          900: '#414141',
        },
        orange: {
          500: '#FF7F50'
        }
      },
    },
  },
  plugins: [],
}

