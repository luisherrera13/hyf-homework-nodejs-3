module.exports = function(app){
    var users = require('../controllers/users');
    app.get('/users', users.findAll);
    var user = require('../controllers/user');
    //app.use(require('body-parser').json());
    app.post('/user', user.add);
    app.get('/user/:id', user.findById);
    app.put('/user/:id', user.update);
    app.delete('/user/:id', user.delete);
}

