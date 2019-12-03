exports.add = function(req, res) {
    const fs = require('fs')
    //var ids=0;
    //var ids=parseInt(req.params.id);
    //newID = { id: ids  };
    //res.send(newID);
   // cuando se hizo la prueba solo se mando hacer un post en la url http://localhost:3000/user/ asi tal cual sin id  
   
   
   var path = './controllers/sample_data.js';
    fs.access(path, fs.F_OK, (err) => {
      if (err) {
        var user = [];
        user.push('module.exports = [{ "id": 0 }];');
        var json1 = user;
        fs.writeFile('./controllers/sample_data.js', json1, function (err) {
            if (err) throw err;
        console.error(err)
        console.log('Saved!');
        user = require('../controllers/sample_data.js')
        res.send(user);
                                          }); 
        //return
      }else{
      user = require('../controllers/sample_data.js')
      res.send(user);}
      //file exists
                                            })
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