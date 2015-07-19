var express = require('express');
var router = express.Router();

/*tuto*/
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*tuto*/
router.get('/posts', function(req, res, next){
  Post.find(function(err, posts){
    if(err){ return next(err);}

    res.json(posts);
  })
});


module.exports = router;
