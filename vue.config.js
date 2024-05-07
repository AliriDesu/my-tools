const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    publicPath: isDev ? '/' : process.env.VUE_APP_BASE_URL
}