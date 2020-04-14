const mongoose=require('mongoose');
const polygonSchema=require('./polygon.model');

polygonSchema.statics={
    getPolygons: function(query, cb) {
        this.find(query, cb);
    }
    
}
const polygonModel= mongoose.model('Polygons',polygonSchema);
module.exports =polygonModel;