const Exercises = require('./exercise.controller');
module.exports = (router) => {
    router.get('/exercise/:game', Exercises.getExercises);
    
}