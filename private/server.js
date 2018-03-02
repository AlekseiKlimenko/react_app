global.ABSPATH = __dirname;
global.INCPATH = ABSPATH + '/libs';

const express = require('express'),
      app = express(),
      // passport = require('passport'),
      // passportConfig = require('./libs/passport')(passport),
      bodyParser = require('body-parser'),
      config = require( INCPATH + '/config' ),
      log = require( INCPATH + '/log')(module);

// const aws = require('aws-sdk');
const isDevelopment = process.env.NODE_ENV === 'development',
      PUBLIC_PATH = process.env.NODE_ENV === 'development' ? config.get('public_path_dev') :  config.get('public_path_prod');

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

app.use(express.static(PUBLIC_PATH));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require('./routes.js')(app, passport, PUBLIC_PATH);

app.get("/", function(req, res) {
    res.sendFile(path.resolve( PUBLIC_PATH , 'index.html' ));
});

app.get("/api/test", function(req, res) {
    setTimeout(() => {
        res.end('Finish');
    },3000);
});

app.listen(config.get('port'), function () {
    log.info('Server start running on port ' + config.get('port'));
});
//========================================




//it telegram bot mirron
// const BOT_TOKEN = '455434039:AAFs2wwf3Z8Kdbe85MZI-9wRIk_jYtAPfLY',
//       Telegram = require('telegram-node-bot'),
//       TelegramBaseController = Telegram.TelegramBaseController,
//       TextCommand = Telegram.TextCommand,
//       tg = new Telegram.Telegram(BOT_TOKEN);

// class PingController extends TelegramBaseController {
//     /**
//      * @param {Scope} $
//      */
//     pingHandler($) {
//         console.log($)
//         $.sendMessage('pong')
//     }
//
//     get routes() {
//         return {
//             'pingCommand': 'pingHandler'
//         }
//     }
// }

// tg.router
//     .when(
//         new TextCommand('ping', 'pingCommand'),
//         new PingController()
//     )
//========================================


//========================================
//it for parsing page.html
// var needle = require('needle');
// var cheerio = require('cheerio');
//
// var URL = 'https://habrahabr.ru/post/301426/';
//
// needle.get(URL, function(err, res){
//     if (err) throw err;
//     var $ = cheerio.load(res.body);
//     console.log(res.body);
//     console.log(res.statusCode);
//     console.log('=================',$('#parsing').text());
// });

//=========================================

