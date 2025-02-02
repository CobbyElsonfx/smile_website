/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#98B4A6', 
          dark: '#7A9587',    
          light: '#C5D8CF',   // lighter tea
          50: '#F3F7F5',      // very light tea
        },
        accent: {
          DEFAULT: '#E6B17E', // warm golden accent
          dark: '#D19862',    // darker golden
          light: '#F2D0AC',   // lighter golden
        },
        neutral: {
          DEFAULT: '#4A5568',
          dark: '#2D3748',
          light: '#A0AEC0',
          50: '#F7FAFC',
        }
      },
    },
  },
  plugins: [],
}