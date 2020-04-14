const mongoose= require('mongoose');
const Schema= mongoose.Schema;
mongoose.set('useCreateIndex',true);

const svgSchema= new Schema({
    cx:{
        type: String,
        required:true,
        trim:true
    },
    cy:{
        type: String,
        required:true,
        trim:true
    },
    r:{
        type: String,
        required:true,
        trim:true
    },
    stroke:{
        type: String,
        required:true,
        trim:true
    },
    strokeWidth:{
        type: String,
        required:true,
        trim:true
    },
    fill:{
        type: String,
        required:true,
        trim:true
    },
    idSvg:{
        type: String,
        required:true,
        trim:true,
        unique:true
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
module.exports=svgSchema;