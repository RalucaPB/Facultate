const mongoose= require('mongoose');
const Schema= mongoose.Schema;
mongoose.set('useCreateIndex',true);

const exerciseSchema= new Schema({
    idExercise:{
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
   corect:{
        type: Number,
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
module.exports=exerciseSchema;