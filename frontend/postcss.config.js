module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss')('./frontend/tailwind.config.js'),
      require('autoprefixer'),
    ],
  };
  