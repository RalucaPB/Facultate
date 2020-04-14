const Rects = require('./rect.controller');
module.exports = (router) => {
    router.get('/rect/:game', Rects.getRects);
}