import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export default new Config().merge({
    entry: './public/src/index.js',
    output: {
        path: __dirname + '/../public/build',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/src/index.html',
            inject: "body"
        })]
});