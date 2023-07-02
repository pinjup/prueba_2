/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'living-room': "url('./src/assets/pexels-ilya-shakir-2440471.jpg')",
        'carpenter': "url('./src/assets/pexels-ivan-samkov-4491881.jpg')",
      }
    },
  },
  plugins: [],
}