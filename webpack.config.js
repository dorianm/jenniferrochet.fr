const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'docs/'),
        filename: `bundle.min.js`
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/template.html',
            filename: 'index.html'
        })
    ]
};
