const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY='ralu1997';

exports.createUser = (req, res, next) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        autism:req.body.autism,
        sindromDown:req.body.sindromDown
    }
    User.create(newUser,(err,user)=>{
        if(err && err.code===11000) return res.status(409).send('Email already exists');
        if(err) return res.status(500).send('Server error!');
        const expiresIn=24*60*60;
        const accessToken= jwt.sign({id: user.id},
            SECRET_KEY,{
                expiresIn: expiresIn
            });
            const dataUser={
                _id:user.id,
                username:user.username,
                email:user.email,
                accessToken:accessToken,
                expiresIn:expiresIn,
                autism:user.autism,
                sindromDown:user.sindromDown
            }
            res.send({dataUser});
    })
}
exports.all = function(req, res, next) {
    User.all({_id:req.params.id}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json(users)
    })
}
exports.update1 = function(req, res, next) {
    var newUser = {
        
        password: bcrypt.hashSync(req.body.password),
    }
    User.update({_id: req.params.id}, newUser, function(err, newUser) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Agenda updated successfully"
        })
    })
}
exports.update2 = function(req, res, next) {
    var newUser = {
        username: req.body.username,
        
    }
    User.update({_id: req.params.id}, newUser, function(err, newUser) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Agenda updated successfully"
        })
    })
}

exports.loginUser = (req, res, next)=>{
    const userData = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({email:userData.email},(err,user)=>{
        if(err) return res.status(500).send('Server error!');
        if(!user){
            res.status(409).send({ message: 'Something is wrong'});
        }else{
            const resultPassword = bcrypt.compareSync(userData.password,user.password);
            if(resultPassword){
                const expiresIn=24*60*60;
                const accessToken=jwt.sign({id: user.id},SECRET_KEY,{expiresIn:expiresIn});
               
                const dataUser={
                    _id:user.id,
                    username:user.username,
                    email:user.email,
                    accessToken:accessToken,
                    expiresIn:expiresIn,
                    autism:user.autism,
                    sindromDown:user.sindromDown
                }
                res.send({dataUser});

            }else{
                res.status(409).send({ message: 'Something is wrong'});
            }
        
        }
    });
}