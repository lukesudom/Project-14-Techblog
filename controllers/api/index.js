
//Requirements

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const { User, Post } = require('../../models');
const router = require('express').Router();

router.use('/user', userRoutes);

//ROUTES

//get all posts
router.get('/posts', async (req, res) => {
    const post = await Post.findAll();
    res.json(post);
});


router.use('/comment', commentRoutes);

//Get all users

router.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});


router.use('/post', postRoutes);

module.exports = router;