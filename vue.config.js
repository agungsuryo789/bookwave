module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/dist/' : '/',
    pwa: {
        name: 'AHA',
        themeColor: '#BA4D4F'
    },
    transpileDependencies: [
        'vuetify'
    ],
    productionSourceMap: false
}