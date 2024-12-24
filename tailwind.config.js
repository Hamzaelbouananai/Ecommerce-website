/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#C0C0C0",
        secondary: "#2E3A8C",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        
        },
      },
    },
  },
  plugins: [],
}

