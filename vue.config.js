const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    publicPath: isDev ? '/' : 'https://aliridesu.github.io/my-tools/dist/'
}