const mongoose= require('mongoose');
const Schema= mongoose.Schema;
mongoose.set('useCreateIndex',true);

const polygonSchema= new Schema({
    /*x1:{
        type: Number,
        required:true,
        trim:true
    },
    y1:{
        type: Number,
        required:true,
        trim:true
    },
    x2:{
        type: Number,
        required:true,
        trim:true
    },
    y2:{
        type: Number,
        required:true,
        trim:true
    },
    x3:{
        type: Number,
        required:true,
        trim:true
    },
    y3:{
        type: Number,
        required:true,
        trim:true
    },
    x4:{
        type: Number,
        required:true,
        trim:true
    },
    y4:{
        type: Number,
        required:true,
        trim:true
    },
    x5:{
        type: Number,
        required:true,
        trim:true
    },
    y5:{
        type: Number,
        required:true,
        trim:true
    },
    x6:{
        type: Number,
        required:true,
        trim:true
    },
    y6:{
        type: Number,
        required:true,
        trim:true
    },*/
    points:{
        type: String,
        required:true,
        trim:true
    },
    idPolygon:{
        type: String,
        required:true,
        trim:true,
        unique:true
    },
    fill:{
        type: String,
        required:true,
        trim:true
    },
    class:{
        type: String,
        required:true,
        trim:true
    },
    game:{
        type: String,
        required:true,
        trim:true
    }


},{
    timestamps:true
});
module.exports=polygonSchema;