  exports.findAll = function(req, res){
  var user = require('../controllers/sample_data.js')
  res.send(user)
  }; 
  exports.findById = function(req, res) {
    var user = require('../controllers/sample_data.js')
      var ids=req.params.id;
    //var greaterTen = [];
for (var i = 0; i<user.length; i++) {
  var currentId = user[i];
  if (currentId.id==ids) {
    res.send(currentId);
  }
  else{"No user available"}
} };
//exports.findById = function() {};
exports.add = function(req, res) {
        var ids=req.params.id;
        var newID = [];
        newID.push(ids);
        res.send(newID);
      };
//exports.add = function() {};

exports.update = function() {};
exports.delete = function() {};