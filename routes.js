module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Bharadwaj'
        });
    });

    app.get('/tags', function (req, res) {
        res.render('tags', {
            title: 'Tags * Bharadwaj'
        });
    });

    app.get('/categories', function (req, res) {
        res.render('categories', {
            title: 'Categories * Bharadwaj'
        });
    });

    app.get('/rss', function (req, res) {
        var posts = app.locals.getPosts(0, 5);
        res.setHeader('Content-Type', 'application/rss+xml');
        res.render('rss', { posts: posts });
    });
};
