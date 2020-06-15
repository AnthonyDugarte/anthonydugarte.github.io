// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: 'A. Dugarte',
  plugins: [{ use: 'gridsome-plugin-tailwindcss' }],
  chainWebpack: config => {
    config.resolve.alias.set('@images', '~/assets/img')
  },
}
