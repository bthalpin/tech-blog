const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');


// get all posts for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(req.session.loggedIn)
    const post ={ posts:posts ,loggedIn:req.session.loggedIn}
    res.render('all-posts', {post,loggedIn:req.session.loggedIn});
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(
      req.params.id,{include:[{model:User},{model:Comment,include:{model:User}}]}
    );
    console.log(postData,'etest')
    if (postData) {
      console.log(postData)
      const post = postData.get({ plain: true });
      res.render('single-post', {posts,loggedIn:req.session.loggedIn});
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
