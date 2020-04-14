const mongoose= require('mongoose');
const Schema= mongoose.Schema;
mongoose.set('useCreateIndex',true);

const rectSchema= new Schema({ 
    x:{
        type: String,
        required:true,
        trim:true
    },
    y:{
        type: String,
        required:true,
        trim:true
    },
    width:{
        type: String,
        required:true,
        trim:true
    },
    height:{
        type: String,
        required:true,
        trim:true
    },
    fill:{
        type: String,
        required:true,
        trim:true
    },
    idRect:{
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
module.exports=rectSchema;