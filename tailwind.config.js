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
      }
    }
  },
  plugins: []
};
