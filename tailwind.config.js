/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': 'rgba(18, 0, 11, 1)',
        'custom-deep-purple': 'rgba(72, 7, 122, 1)',
        'dark-neutral': '#0c0c0c',
        'green-neutral': '#1ed760',
        'brown-neutral': '#bc7031',
        'blue-neutral': '#2476ee',

        'custom-purple-text-gradient': '#5A189A',
        'custom-purple-text-gradient-secondary': '#E0AAFF',
      },
      backgroundImage: {
        'custom-radial':
          'radial-gradient(circle, rgba(21,12,34,1) 39%, rgba(35,20,54,1) 100%)',
        'complementary-radial':
          'radial-gradient(circle, rgba(10,5,20,1) 50%, rgba(0,0,0,1) 100%)',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
