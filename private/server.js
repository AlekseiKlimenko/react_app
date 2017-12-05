const express = require('express'),
      app = express(),
      path = require('path');

// const aws = require('aws-sdk');

const PUBLIC_PATH = '../public/build';
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
    const webpack = require('webpack');
    const webpackConfig = require('../webpack.config.babel').default;
    const compiler = webpack(webpackConfig);
    app.use(require('webpack-dev-middleware')(compiler, {
        hot: true,
        stats: {
            colors: true
        }
    }));
    app.use(require('webpack-hot-middleware')(compiler));
} else {
    app.use(express.static( PUBLIC_PATH ));
}

app.get("/", function(req, res) {
    res.sendFile(path.resolve( PUBLIC_PATH, 'index.html' ));
});

app.listen(3000, function () {
    console.log('Server start listen port 3000!');
});