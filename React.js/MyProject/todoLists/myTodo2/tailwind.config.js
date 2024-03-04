/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'myFont' : ['Hedvig Letters Sans' , 'sans-serif']
      },
    },
  },
  plugins: [],
}

