module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.vue',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'gridsome.config.js',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'visited'],
  },

  plugins: [],
}
