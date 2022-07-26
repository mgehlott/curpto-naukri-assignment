/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appBlue: '#1565D8E5',
        appGray: '#8692A6',
        lightBlue:'#F5F9FF'
      },
      fontFamily: {
        Inter:['Inter', 'sans-serif']
      },
      backgroundImage: {
        'polygon': "url('./assets/polygon.png')",
        'polygon2': "url('./assets/polygon2.png')",
      },
    },
  },
  plugins: [],
}
