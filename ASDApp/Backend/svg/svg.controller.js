const Svg = require('./svg.dao');

exports.getSvgs = function(req, res, next) {
    Svg.getSvgs({game: req.params.game}, function(err, svgs) {
        if(err) {
            res.json({
                error: err
            })
        }
       /* res.json({
            entities: entities
        })*/
        res.json(svgs);
    })
}
