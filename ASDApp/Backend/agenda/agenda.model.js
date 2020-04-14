const mongoose= require('mongoose');
const Schema= mongoose.Schema;
mongoose.set('useCreateIndex',true);

const agendaSchema= new Schema({
    idUser:{
        type: String,
        required:true,
        trim:true
    },
    activity:{
        type: String,
        required:true,
        trim:true,
        
    },
    date:{
        type: String,
        required:true,
        trim:true,
        unique:true
    }

},{
    timestamps:true
});
module.exports=agendaSchema;