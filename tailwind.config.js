/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-custom': '300px',  // Define a custom breakpoint at 400px
        
      },
    },
  },
  plugins: [],
}

