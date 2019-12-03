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
        res.status(200).send()
        //return
      }else{
      user = require('../controllers/sample_data.js')
      res.send(user);}
      //file exists
    })
    
    
    }; //shows an empty array if there's no sample_data.js 
    //available and if it does exists shows file's content