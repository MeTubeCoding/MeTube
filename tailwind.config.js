module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      'me-yellow': '#ecd4ad',
      'me-lightpurple': '#4d2e4e',
      'me-mediumpurple': '#24152c',
      'me-darkpurple': '#1d1124',
      'me-orange': '#a45d2b'
    }
  },
  variants: {},
  plugins: []
}
