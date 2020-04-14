const mongoose=require('mongoose');
const svgSchema=require('./svg.model');

svgSchema.statics={
    getSvgs: function(query, cb) {
        this.find(query, cb);
    }
    
}
const svgModel= mongoose.model('Svgs',svgSchema);
module.exports =svgModel;