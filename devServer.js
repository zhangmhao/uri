var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.dev');
var compiler = webpack(config);
var app = express();




app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use('/', express.static(path.join(__dirname, './')));

app.use('/*', function (req, res) {
    res.type('html').send(fs.readFileSync(path.resolve(__dirname, "./index.html")));
});

app.listen(5000, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:5000');
});