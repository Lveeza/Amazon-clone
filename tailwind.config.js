/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito:['Nunito' , 'sans-serif']
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}
