global.ABSPATH = __dirname;
global.INCPATH = ABSPATH + '/libs';

const express = require('express'),
      app = express(),
      config = require( INCPATH + '/config' ),
      log = require( INCPATH + '/log')(module),
      path = require('path');

// const aws = require('aws-sdk');
const isDevelopment = process.env.NODE_ENV === 'development',
      PUBLIC_PATH = process.env.NODE_ENV === 'development' ? '.' + config.get('public_path') :  '..' + config.get('public_path');

app.use(express.static(PUBLIC_PATH));

//for starting server - npm run start || npm run start-nodemon
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
}

app.get("/", function(req, res) {
    res.sendFile(path.resolve( PUBLIC_PATH , 'index.html' ));
});

app.listen(config.get('port'), function () {
    log.info('Server start running on port ' + config.get('port'));
});