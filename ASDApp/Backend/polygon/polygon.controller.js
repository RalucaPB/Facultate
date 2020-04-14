const Polygon = require('./polygon.dao');

exports.getPolygons = function(req, res, next) {
    Polygon.getPolygons({game: req.params.game}, function(err, polygons) {
        if(err) {
            res.json({
                error: err
            })
        }
       /* res.json({
            entities: entities
        })*/
        res.json(polygons);
    })
}
