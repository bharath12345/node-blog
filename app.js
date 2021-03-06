var express = require('express'),
    app = express(),
    Poet = require('poet'),
    moment = require('moment');

var poet = Poet(app, {
    postsPerPage: 5,
    posts: __dirname + '/_posts',
    metaFormat: 'json'
});

poet.watch().init();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(app.router);
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));

require('./routes')(app);

console.log("Starting node http server on port 3333")
app.listen(process.env.PORT || 3333)
