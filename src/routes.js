module.exports = function(app){
    var users = require('../controllers/users');
    app.get('/users', users.findAll);
    var user = require('../controllers/user');
    app.post('/user', user.add);
    app.get('/user/:id', user.findById);
    app.delete('/user/:id', user.delete);
}

