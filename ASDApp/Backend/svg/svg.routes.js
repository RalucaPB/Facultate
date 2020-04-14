const Svgs = require('./svg.controller');
module.exports = (router) => {
    router.get('/svg/:game', Svgs.getSvgs);
}