const path = require('path')
const EndWebpackPlugin = require('./plugins/test')
module.exports = {
    entry: './index.js',
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: path.resolve('loaders/test.js')
            }],
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new EndWebpackPlugin(() => {
            console.log('构建成功')
        }, err => {
            console.log(err)
        })
    ]
}