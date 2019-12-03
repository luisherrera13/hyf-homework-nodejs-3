  //exports.findAll = function(req, res){
  //var user = require('../controllers/sample_data.js')
  //var user = [];
  //res.send(user)
  //}; 
  exports.findAll = function(req, res){
    const fs = require('fs')
    var path = './controllers/sample_data.js';
    fs.access(path, fs.F_OK, (err) => {
      if (err) {
        var user = [];
        res.send(user);
        console.error(err)
        //return
      }else{
      user = require('../controllers/sample_data.js')
      res.send(user);}
      //file exists
    })
    
    /*user.push('module.exports = [{ "id": 0 }];');
    var json1 = user;
    var fs = require('fs');
     //fs.writeFile('myjsonfile.json', json1, 'utf8', callback);
     fs.writeFile('./controllers/sample_data.js', json1, function (err) {
      if (err) throw err;
      console.log('Saved!');
    }); */
    }; //muestra un arreglo vacio pero si quiere mostrar
    // el contenido del array descomentarlo y cometar el array vacio