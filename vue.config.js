module.exports = {
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