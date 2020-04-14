const Entity = require('./entity.dao');

exports.getEntities = function(req, res, next) {
    Entity.getEntities({game: req.params.game}, function(err, entities) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json(entities);
    })
}
