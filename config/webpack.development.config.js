import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('config/webpack.base.config.js').merge({
    entry:[
        'webpack-hot-middleware/client?reload=true',
        'react-hot-loader/patch',
        './public/index.js'
    ],
    output: {
        filename: 'bundle.js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});