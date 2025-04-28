

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
        'dark-red': '#b41a33',
        'light-red': '#a5132a',
        'imp-gold': '#ff931c'
      },
      backgroundImage: {
        'fre-art': "url('https://reyansh-aggarwal.github.io/l-ombre/assets/french-art.PNG')"
      },
      animation: {
        gradient: 'gradient 3s ease infinite',
        'slow-spin': 'slow-spin 30s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'slow-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    }
    
  },
  plugins: [],
}

