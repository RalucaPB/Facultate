const mongoose=require('mongoose');
const exerciseSchema=require('./exercise.model');

exerciseSchema.statics={
    getExercises: function(query, cb) {
        this.find(query, cb);
    }
    
}
const exerciseModel= mongoose.model('Exercises',exerciseSchema);
module.exports =exerciseModel;