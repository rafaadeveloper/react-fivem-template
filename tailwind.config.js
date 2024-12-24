/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        interface: '1195px',
      },
      height: {
        interface: '780px',
      },
      colors: {
        'background-interface': '#191924FC'
      }
    },
  },
  plugins: [],
};
