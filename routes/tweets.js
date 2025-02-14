var express = require('express');
var router = express.Router();
const Tweet = require ('../models/tweetSchema')

/* Récuperer un seul tweet créer. */
router.post('/newtweet', function(req, res, next) {
    const newtweet = new Tweet({
        content : req.body.content,
        author : req.body.author,
        dateDue : new Date(),
    }) 
newtweet.save().then((data)=>{
console.log(data);

    res.json({ // Pourquoi res.json pour poster dans La BB
    result : true, 
    tweet : data,
    
    })
})

});
/* Récuperer tout les tweets crée. */
router.get('/alltweet',function(req, res, next) {
    Tweet.find()
    .populate('author')
    .then(data =>{
console.log(data);

res.json({
    result : true,
    Alltweet : data,
})

    })

})



//on va modifier le tweet avec l'id de la collection tweet
router.put('/likedtweet', function(req, res){
    Tweet.findById(req.body.id).then(data=>{
       if(data){
          Tweet.updateOne({_id:data._id},{$push:{isLiked:data._id}})//dans le schéma y'a un tableau de clé etrangere et a chaque fois que l'ont modifie le tweet on rajoute une clé etrangere dans le tab isLiked 
          .then((data)=>{
           res.json({result:true,data})
          })
       }
      
                 
       })
   
    })





module.exports = router;