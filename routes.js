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

    app.get('/toc', function (req, res) {
        res.render('toc', {
            title: 'Index of Posts * Bharadwaj'
        });
    });

    app.get('/search', function (req, res) {
        res.render('search', {
            title: 'Search Posts * Bharadwaj'
        });
    });

    /*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*/

    app.get('/about/books', function (req, res) {
        res.render('about/books', {
            title: 'My kind of books * Bharadwaj'
        });
    });
    app.get('/about/current', function (req, res) {
        res.render('about/current', {
            title: 'Current Affairs * Bharadwaj'
        });
    });
    app.get('/about/education', function (req, res) {
        res.render('about/education', {
            title: 'Education * Bharadwaj'
        });
    });
    app.get('/about/movies', function (req, res) {
        res.render('about/movies', {
            title: 'My kind of movies * Bharadwaj'
        });
    });
    app.get('/about/philosophy', function (req, res) {
        res.render('about/philosophy', {
            title: 'My Philosophy * Bharadwaj'
        });
    });
    app.get('/about/quotes', function (req, res) {
        res.render('about/quotes', {
            title: 'Favorite quotes * Bharadwaj'
        });
    });
    app.get('/about/slideshare', function (req, res) {
        res.render('about/slideshare', {
            title: 'Slideshare * Bharadwaj'
        });
    });
    app.get('/about/travel', function (req, res) {
        res.render('about/travel', {
            title: 'Travel * Bharadwaj'
        });
    });
    app.get('/about/timeline', function (req, res) {
        res.render('about/timeline', {
            title: 'Timeline * Bharadwaj'
        });
    });
    app.get('/about/work', function (req, res) {
        res.render('about/work', {
            title: 'My work * Bharadwaj'
        });
    });
    app.get('/about/resources', function (req, res) {
        res.render('about/resources', {
            title: 'Resources * Bharadwaj'
        });
    });
    app.get('/resources/kagga', function (req, res) {
        res.render('resources/kagga', {
            title: 'Kagga * Bharadwaj'
        });
    });
    app.get('/about/torrents', function (req, res) {
        res.render('about/torrents', {
            title: 'Torrents * Bharadwaj'
        });
    });

    /*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*/

    app.get('/rss', function (req, res) {
        var posts = app.locals.getPosts(0, 5);
        res.setHeader('Content-Type', 'application/rss+xml');
        res.render('rss', { posts: posts });
    });
};
