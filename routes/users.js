var express = require('express');
var router = express.Router();
const uid2 = require('uid2');
const bcrypt = require('bcrypt');
const User = require('../models/users')

/* GET users listing. */

router.post('/signup', function(req, res) {

  User.findOne({ username: req.body.username }).then(data => {
    const hash = bcrypt.hashSync(req.body.password, 10);
if(data===null){

const newUser = new User({
  firstname: req.body.firstname ,
  username: req.body.username ,
  password: hash,
  token: uid2(32),
 });
 
 newUser.save().then(data=>{
  res.json({result:true, user:data})
 })

 
}
else{
  res.json({result:false, error: 'user found'})
}
 
 
   });
  



});

router.post('/signin', function(req, res) {

  User.findOne({ username: req.body.username }).then(data => {
    console.log(req.body.password, data.password);
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      
      res.json({ result: true, data: data}); // Ici on renvoie l'ensemble de la Data.
    } else{
      res.json({ result: false, error : 'PASSWORD Not found please try again' }); // réponse vers le frontend
    }
  
   });


   

});
  






module.exports = router;
