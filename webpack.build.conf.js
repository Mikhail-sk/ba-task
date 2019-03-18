const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new PurgecssPlugin({
            paths: glob.sync(`${baseWebpackConfig.externals.paths.src}/**/*`,  { nodir: true }),
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})
