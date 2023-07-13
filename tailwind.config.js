/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: '2rem',
    },
    colors: {
      'background': '#000000',
      'white': '#fff',
      'grey': '#A1A1A1',
      'grey-2': '#18181B',
      'grey-3': '#888888',
      'grey-4': '#CCD7E1',
      'footer-t': '#1DA99E',
      'border-btn': '#5C5C5C',
      'btn-bg': '#191919',
      'card': '#5B5B5B',
      'growth-bg': 'rgba(91, 91, 91, 0.20)',
      'growth-text': '#D0D0D0',
      'service-bg':'rgba(74, 74, 74, 0.40)',
      'head-text': 'linear-gradient(90deg, #0052CC 0%, #00C7F3 37.1%)',


    },
    extend: {},
  },
  plugins: [],
}

