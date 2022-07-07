module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    colors: {
      grey: '#242526'
    },
    extend: {}
  },
  darkMode: 'media',
  plugins: [require('flowbite/plugin')]
};
