
//Requirements

const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

//ROUTES

//Create user post - working
router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    console.log(body);
    const newPost = await Post.create({ ...body, user_id: req.session.userId });
    res.json(newPost);
  } catch (err) {
    console.log(err);
    console.log(err);
    res.status(500).json(err);
  }
});
//Delete user post - working 

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Edit user post - working 

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;