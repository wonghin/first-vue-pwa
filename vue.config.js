const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Pokedex',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    },
    iconPaths: {
      faviconSVG: 'img/icons/favicon.svg',
      // faviconSVG: 'img/icons/icon-192x192.png',
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      // maskIcon: 'img/icons/icon-192x192.png',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    // icons: [
    //   {
    //     src: "img/icons/icon-192x192.png",
    //     type: "image/png",
    //     sizes: "192x192"
    //   },
    //   {
    //     src: "img/icons/icon-512x512.png",
    //     type: "image/png",
    //     sizes: "512x512"
    //   }
    // ],
  }
})
