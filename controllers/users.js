  exports.findAll = function(req, res){
  var user = require('../controllers/sample_data.js')
  //var user = [];
  res.send(user)
  }; //muestra un arreglo vacio pero si quiere mostrar el contenido del array descomentarlo y cometar el array vacio