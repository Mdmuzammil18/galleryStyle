/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
      },
      gridTemplateColumns: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      rotate: {
        '45': '45deg',
      },
      scale: {
        '75': '0.75',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        'stagger-fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'scale-up': {
          '0%': { 
            transform: 'scale(1) translateY(0)',
            zIndex: '0'
          },
          '100%': { 
            transform: 'scale(1.5) translateY(-20%)',
            zIndex: '50'
          },
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-down': 'slide-down 0.8s ease-out',
        'fade-slide-up': 'fade-slide-up 1s ease-out',
        blob: "blob 7s infinite",
        'stagger-fade-in': 'stagger-fade-in 0.5s ease-out forwards',
        'scale-up': 'scale-up 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}
