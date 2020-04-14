const mongoose=require('mongoose');
const entitySchema=require('./entity.model');

entitySchema.statics={
    getEntities: function(query, cb) {
        this.find(query, cb);
    }
    
}
const entityModel= mongoose.model('Entities',entitySchema);
module.exports =entityModel;