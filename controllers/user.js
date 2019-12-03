exports.add = function(req, res) {
    var ids=0;
    //var ids=parseInt(req.params.id);
    newID = { id: ids  };
    res.send(newID);
   // cuando se hizo la prueba solo se mando hacer un post en la url http://localhost:3000/user/ asi tal cual sin id  
        };
       
  //exports.add = function() {};
  
  exports.findById = function(req, res) {
    var user = require('../controllers/sample_data.js')
     var ids=req.params.id;
     //console.log(ids);
for (var i = 0; i<=user.length; i++) {//<= my cause some warnings it depends on number of elements of the array
  var currentId = user[i];
  if (currentId.id==ids) {
    res.send(currentId);
  }
} };//asi como se estructuro esta funcion es capaz de seleccionar un registro del arreglo json pasandole el id
//exports.findById = function() {};

exports.delete = function() {};