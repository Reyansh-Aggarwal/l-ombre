

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
  ],
  theme: {
    extend:{
      fontFamily: {
        'vendya': ['vendya', 'arial'],
        'clash-display-light': ['clash-display-light', 'arial'],
      },
      colors: {
        'dark-red': '#9d1921',
        'light-red': '#a5132a',
      },
      backgroundImage: {
        'fre-art': "url('https://reyansh-aggarwal.github.io/l-ombre/assets/french-art.PNG')"
      },
      animation: {
        gradient: 'gradient 3s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    }
    
  },
  plugins: [],
}

