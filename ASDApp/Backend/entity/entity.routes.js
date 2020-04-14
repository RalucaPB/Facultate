const Entities = require('./entity.controller');
module.exports = (router) => {
    router.get('/entity/:game', Entities.getEntities);
}