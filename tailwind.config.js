module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        160: '40rem',
        192: '48rem'
      },
      fontSize: {
        '7.5xl': '5rem'
      },
      colors: {
        primary: '#4B7FD2',
        baseText: '#1A2B38',
        specialText: '#47749A',
        baseBg: '#F4F5F7',
        specialBg: '#DFE1E5',
        selectionBg: '#B9BFCB'
      },
      boxShadow: {
        around: '0 0 20px rgb(0 0 0 / 0.1), 0 0 20px rgb(0 0 0 / 0.1)'
      },
      animation: {
        'fade-in-100ms': '1s ease 0s normal forwards 1 fadeIn',
        'fade-in-150ms': '1.5s ease 0s normal forwards 1 fadeIn',
        'fade-in-200ms': '2s ease 0s normal forwards 1 fadeIn',
        'slide-in-200ms': '2.5s ease 0s normal forwards 1 slideIn'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        slideIn: {
          '0%': { opacity: 0 },
          '50%': {
            opacity: 0,
            transform: 'translateY(25px)'
          },
          '100%': { opacity: 1, transform: 'translateY(0%)' }
        }
      }
    }
  },
  plugins: []
};
