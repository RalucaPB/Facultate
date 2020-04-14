const Rect = require('./rect.dao');

exports.getRects = function(req, res, next) {
    Rect.getRects({game: req.params.game}, function(err, rects) {
        if(err) {
            res.json({
                error: err
            })
        }
       /* res.json({
            entities: entities
        })*/
        res.json(rects);
    })
}
