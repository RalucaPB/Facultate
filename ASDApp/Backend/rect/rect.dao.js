const mongoose=require('mongoose');
const rectSchema=require('./rect.model');

rectSchema.statics={
    getRects: function(query, cb) {
        this.find(query, cb);
    }
    
}
const rectModel= mongoose.model('Rects',rectSchema);
module.exports =rectModel;