/* eslint-disable indent */
module.exports = {
  devServer: {
    // change to your domain name
    proxy: 'https://vuekit.test'
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : ''
}
