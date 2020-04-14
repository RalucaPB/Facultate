const Polygons = require('./polygon.controller');
module.exports = (router) => {
    router.get('/polygon/:game', Polygons.getPolygons);
}