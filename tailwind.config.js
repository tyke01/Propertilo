/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      backgroundColor: {
        'main-bg': '#f5f6fa',
        'sidebar-bg': ' #353a40',
        'button-bg': '#57be79',
      },
      borderColor: {
        color: '#57be79',
      },
      colors: {
        'icon-colors': '#fdffff',
        'text-color': '#c4c8d1',
        'link-text': '#57be79',
        'sec-link-text': '#f3a42b'
      }
    },
  },
  plugins: [],
}
// green : #57be79
// sidebar-bg: #353a40
// text-color: #c4c8d1
// main-bg: #f5f6fa
// icons-clr: #fdffff