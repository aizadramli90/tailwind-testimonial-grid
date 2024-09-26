/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },
      colors: {
        purple: 'hsl(272, 72%, 47%)',
        riverBed: 'hsl(215, 14%, 34%)',
        athensGray: 'hsl(220, 13%, 91%)',
        ebony: 'hsl(221, 39%, 11%)',
        grayChateau: 'hsl(212, 7%, 65%)',



      },
    },
  },
  plugins: [],
}

