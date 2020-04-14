const Exercise = require('./exercise.dao');

exports.getExercises = function(req, res, next) {
    Exercise.getExercises({game: req.params.game}, function(err, exercises) {
        if(err) {
            res.json({
                error: err
            })
        }
       /* res.json({
            entities: entities
        })*/
        res.json(exercises);
    })
}
