exports.add = function(req, res) {
    var ids=parseInt(req.params.id);
    newID = { id: ids  };
    res.send(newID);
   // console.log(newID);  
        };
       
  //exports.add = function() {};
  
  exports.findById = function(req, res) {
    var user = require('../controllers/sample_data.js')
     var ids=req.params.id;
    //var greaterTen = [];
for (var i = 0; i<=user.length; i++) {
  var currentId = user[i];
  if (currentId.id==ids) {
    res.send(currentId);
  }
} };
//exports.findById = function() {};


exports.update = function() {};
exports.delete = function() {};