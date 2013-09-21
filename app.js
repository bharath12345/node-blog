var express = require('express'),
    app = express(),
    Poet = require('poet');

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

require('./routes')(app);

console.log("Starting node http server on port 3333")
app.listen(process.env.PORT || 3333)
