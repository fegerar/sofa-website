/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: { // Define yellow accent color palette
          light: '#fef3c7', // yellow-100
          DEFAULT: '#facc15', // yellow-400
          dark: '#eab308', // yellow-500
          darker: '#ca8a04', // yellow-600
        },
        dark: { // Define dark theme colors
          bg: '#111827', // gray-900
          'bg-secondary': '#1f2937', // gray-800
          text: '#f9fafb', // gray-50
          'text-secondary': '#d1d5db', // gray-300
        }
      }
    },
  },
  plugins: [],
};
