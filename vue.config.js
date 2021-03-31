const isProduction = process.env.NODE_ENV !== 'development'


module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Orbiter-cross rollups'
        return args
      })
    config.externals({
      'web3': 'Web3'
    })
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {}
  },
  devServer: {
    disableHostCheck: true,
    open: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    overlay: {
      warnings: false,
      errors: false
    }
  },
  configureWebpack: config => {
    // config.resolve.alias = {
    //   '@': resolve('src'),
    //   '@s': resolve('src/store'),
    //   '@u': resolve('src/util')
    // }
    if (isProduction) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization = {
        splitChunks: {
          cacheGroups: {
            vendor: {
              chunks: 'all',
              test: /node_modules/,
              name: 'vendor',
              minChunks: 1,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 100
            },
            common: {
              chunks: 'all',
              test: /[\\/]src[\\/]js[\\/]/,
              name: 'common',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 60
            },
            styles: {
              name: 'styles',
              test: /\.(sa|sc|c)ss$/,
              chunks: 'all',
              enforce: true
            },
            runtimeChunk: {
              name: 'manifest'
            }
          }
        }
      }
    } else {
      config.devtool = 'eval-cheap-module-source-map'
    }
  },
  pluginOptions: {
    // ...
  }
}
