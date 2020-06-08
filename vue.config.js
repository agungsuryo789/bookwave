module.exports = {
  pwa: {
    name: 'AHA',
    themeColor: '#BA4D4F',
    workboxPluginMode: 'InjectManifest'
  },
  devServer: {
	proxy: 'https://app.sandbox.midtrans.com/snap/'
  },
  transpileDependencies: [
    'vuetify'
  ]
}
