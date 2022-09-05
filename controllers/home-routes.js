//Requirements


const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

//ROUTES

// all homepage posts - working
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: { exclude: ['user_id', 'updatedAt'] },
      include: [
        { model: User, attributes: { exclude: ['password', 'createdAt'] }},
        { model: Comment },
      ],
    });
    const posts = postData.map(post => post.get({ plain: true }));
    res.render('all-posts', { 
      payload: { posts, session: req.session }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// single post - working
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: {
        exclude: ['user_id', 'updatedAt'] 
      },
      include: [
        { 
          model: User, 
          attributes: { 
            exclude: ['password', 'createdAt'] 
          }
        },
        { 
          model: Comment, 
          include: {
            model: User,
            attributes: { exclude: ['password'] }
          }
        },
      ],
    });
    if (postData) {
      res.render('single-post', { 
        payload: { posts: [post], session: req.session }
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login routes -- working
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


//signup routes -- working

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});




//Exports

module.exports = router;