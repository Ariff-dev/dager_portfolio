/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': 'rgba(18, 0, 11, 1)',
        'custom-deep-purple': 'rgba(72, 7, 122, 1)',
        'custom-dark-purple': 'rgba(39, 1, 74, 1)',

        'custom-purple-text-gradient': '#5A189A',
        'custom-purple-text-gradient-secondary': '#E0AAFF',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
