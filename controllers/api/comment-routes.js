const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// URL: /api/comment
router.post('/', withAuth, async (req, res) => {
  console.log(req.body,'test')
  try {
    const newComment = await Comment.create({
      
      body:req.body.body,
      userId:req.session.userId,
      username:req.session.username,
      postId:req.body.postId
     
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
