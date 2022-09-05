// Requirements

const router = require('express').Router();
const { User } = require('../../models');

//ROUTES

//Create new user 

router.post('/', async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (existingUser) {
      console.log('Username already taken');
      res.status(500).json({ message: 'Sorry! this username is already in use!' });
      return;
    }

    //here we create the user 

    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    //save the user to db

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
});


//Login route - working 

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'Sorry! No account found!' });
      return;
    }

    if (!(await user.validatePassword(req.body.password))) {
      res.status(400).json({ message: 'Sorry! The password you entered is incorrect!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'Successfully logged in' });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json();
  }
});


//Logut route - working 

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//Exports

module.exports = router