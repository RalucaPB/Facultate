const Users = require('./auth.controller');
module.exports = (router) => {
    router.post('/register', Users.createUser);
    router.post('/login', Users.loginUser);
    router.put('/updateUserParola/:id',Users.update1);
    router.put('/updateUserUsername/:id',Users.update2);
    router.get('/allUser/:id',Users.all);
}