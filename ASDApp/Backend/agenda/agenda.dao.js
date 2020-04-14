const mongoose=require('mongoose');
const agendaSchema=require('./agenda.model');

agendaSchema.statics={
    add: function(data,cb){
        const agenda=new this(data);
        agenda.save(cb);
    },
    all: function(query, cb) {
        this.find(query, cb);
    },
   

   

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }

}
const agendaModel= mongoose.model('Agendas',agendaSchema);
module.exports =agendaModel;