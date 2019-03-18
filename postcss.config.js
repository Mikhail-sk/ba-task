const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
      tailwindcss('./tailwind.js'),
      require('autoprefixer'),
      require('css-mqpacker'),
      require('cssnano')({
          preset: [
              'default', {
                  discardComments: {
                      removeAll: true
                  }
              }
          ]
      })
  ]
}
