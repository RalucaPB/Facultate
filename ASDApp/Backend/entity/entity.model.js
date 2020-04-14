const mongoose= require('mongoose');
const Schema= mongoose.Schema;
mongoose.set('useCreateIndex',true);

const entitySchema= new Schema({
    idEntity:{
        type: String,
        required:true,
        trim:true,
        unique:true
    },
    name:{
        type: String,
        required:true,
        trim:true
    },
    audioPath:{
        type: String,
        required:true,
        trim:true
    },
    imagePath:{
        type: String,
        required:true,
        trim:true
    },
    game:{
        type:String,
        required:true,
        trim:true
    }

},{
    timestamps:true
});
module.exports=entitySchema;