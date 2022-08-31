const router =  require('express').Router();
const { Post, Comment, User } = require('../models');


//Get all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        });

        const posts = postData.map((post) => post.get ({ plain: true }));

        res.render('all-posts', { posts });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Get single post

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await SomeModel.findByPk(req.params.id, {

            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
