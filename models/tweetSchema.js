const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
 content: String,
 author:{ type: mongoose.Schema.Types.ObjectId, ref: 'users' },
 isLiked:[{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
 //tableau parce que plusieurs user peuvent liker,clé etrangere
 dateDue: Date,
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;