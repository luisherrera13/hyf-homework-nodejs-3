exports.add = function(req, res) {
                const fs = require('fs')
                //var ids=0;
                //var ids=parseInt(req.params.id);
                //newID = { id: ids  };
                //res.send(newID);
              // When it was tested only needed the url http://localhost:3000/user/ 
              //(try sending a post request with postman by example)  
              
              
              var path = './controllers/sample_data.js';
                fs.access(path, fs.F_OK, (err) => {
                  if (err) {
                    var user = [];
                    user.push('module.exports = [{ "id": 0 }];');
                    var json1 = user;
                    fs.writeFile('./controllers/sample_data.js', json1, function (err) {
                        if (err) throw err;
                    //console.error(err)
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
            } };//the way this function was made has the 
            //hability to show only one user id by pasing the id as a param on the url
            //exports.findById = function() {};

exports.delete = function(req, res){

            const fs = require('fs')

            const path = './controllers/sample_data.js';

            var id = req.params.id;

            fs.unlink(path, (err) => {
              if (err) {
                console.error(err)
                //res.send(err)
                //return
                res.status(204).send()
              }
              else{
                console.log("The user id: "+id+" has been deleted!")
                res.status(202).send()
              }//file removed
            })
            
          };
