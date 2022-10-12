/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      'project-yelllow' : 'rgb(236, 179, 101)',
      'project-nautilus' : 'rgb(6, 70, 99)',
      'project-green' : 'rgb(4, 41, 58)',
      'project-marine' : 'rgb(4, 28, 50)',
      
    }, 
  },
  },
  plugins: [],
};
