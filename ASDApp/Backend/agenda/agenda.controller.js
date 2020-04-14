const Agenda = require('./agenda.dao');

exports.add = function (req, res, next) {
    var agenda = {
        idUser: req.body.idUser,
        activity: req.body.activity,
        date:req.body.date
    };

    Agenda.add(agenda, function(err, agenda) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Agenda created successfully"
        })
    })
}

exports.all = function(req, res, next) {
    Agenda.all({idUser:req.params.idUser}, function(err, agendas) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json(agendas)
    })
}

exports.update = function(req, res, next) {
    var agenda = {
        activity: req.body.activity,
        date:req.body.date
    }
    Agenda.update({_id: req.params.id}, agenda, function(err, agenda) {
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

exports.delete = function(req, res, next) {
    Agenda.delete({_id: req.params.id}, function(err, agenda) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Agenda deleted successfully"
        })
    })
}