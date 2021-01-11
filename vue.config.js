module.exports = {
    pwa: {
        name: 'AHA',
        themeColor: '#BA4D4F'
    },

    transpileDependencies: [
        'vuetify'
    ],

    productionSourceMap: false,
    devServer: {
		proxy: 'https://api.ahabaca.com',
        headers: { 'Access-Control-Allow-Origin': '*' },
    }
}