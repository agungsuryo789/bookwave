module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/dist/' : '/',
    pwa: {
        name: 'AHA',
        themeColor: '#BA4D4F'
    },
    devServer: {
        proxy: 'https://app.sandbox.midtrans.com/snap/'
    },
    transpileDependencies: [
        'vuetify'
    ],
    productionSourceMap: false
}