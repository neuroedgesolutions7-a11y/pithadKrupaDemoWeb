/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0D4F2F', // Dark Green
          secondary: '#1A5C3A', // Lighter Green
          accent: '#F59E0B', // Golden accent
          blue: '#10B981',
          success: '#10B981',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.35)',
        glass: '0 10px 40px rgba(2, 6, 23, 0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

