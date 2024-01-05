/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      Green :'#69ACA4',
      Green33:'#A4E0D7',
      Blue:'#4A9ECA',
      Blue66:'#C8E8F2',
      Blue44:'#E9FAFF',
      Blue33:'#EFFBFF',
      Gray:'#C9E2EF',
      White:'#FFFFFF',
    },
    extend: {
      colors: {
          '5A92B0':"#5A92B0",
          'EEF8FD':'#EEF8FD',
          '5F696D':'#5F696D',
          '444B59':'#444B59',
          '80BBDA':'#80BBDA',
          'FFFFFF':'#FFFFFF',
          '789ADE':'#789ADE'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

