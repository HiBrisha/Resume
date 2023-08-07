/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'main-bkc': '#373b40',
        'header-bkc': '#585d65',
      },
      textColor: {
        'main-tcl': '#ffffff',
        'type-tcl': '#68e0cf',
      },
    },
  },
  plugins: [],
}
