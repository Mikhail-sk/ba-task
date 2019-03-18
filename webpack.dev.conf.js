const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        overlay: true,
        port: 9000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})
