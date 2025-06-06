// tailwind.config.js
export default{
  content: [
    './**/*.html',
    './src/**/*.{js,css}',
    './src/tailwind.css', 
  ],
  safelist: ['bg-primary'], 
  theme: {
    extend: {
      colors: {
        primary: 'rgba(107, 45, 4, 0.781)',
        secondary: '#52a7fe',
        'primary-overlay': 'rgba(107, 45, 4, 0.8)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
