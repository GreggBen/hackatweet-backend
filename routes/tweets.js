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
router.get('/alltweet', function(req, res, next) {
    Tweet.find().then(data =>{
console.log(data);

res.json({
    result : true,
    Alltweet : data,
})

    })

})




module.exports = router;