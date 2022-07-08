module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    colors: {
      'grey-800': '#242526',
      'grey-600': '#3C3E40'
    },
    extend: {}
  },
  darkMode: 'media',
  plugins: [require('flowbite/plugin')]
};
