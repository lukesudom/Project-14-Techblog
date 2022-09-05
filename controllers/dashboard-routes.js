//Requirements


const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth');
const router = require('express').Router();


//ROUTES


// Get all posts for dashboard - working
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: { exclude: ['updatedAt', 'user_id'] },
      include: [
        { model: User, attributes: { exclude: ['updatedAt', 'password'] }},
        { model: Comment },
      ],
      where: {
        user_id: req.session.userId,
      }
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('all-posts-admin', {
      layout: 'dashboard',
      payload: { posts, session: req.session }
    });
  } catch (err) {
    console.log(err);
    res.redirect('login');
  }
});

//Edit post route based off ID - working

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('edit-post', {
        layout: 'dashboard',
        payload: { posts: post, session: req.session }
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.redirect('login');
  }
});

// New post route - working
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});



//Exports

module.exports = router;