const Agendas = require('./agenda.controller');
module.exports = (router) => {
    router.post('/add', Agendas.add);
    router.delete('/delete/:id', Agendas.delete);
    router.put('/update/:id',Agendas.update);
    router.get('/all/:idUser',Agendas.all);
}