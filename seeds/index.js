//Requirements 


const {
  User,
  Post,
  Comment
} = require('../models');


//User seeds - working

const users = [

  {
      username: 'Test',
      password:'testuser'
  },
  {
      username: 'Marco',
      password:'55553232'
  },
  {
      username: 'Ronny',
      password:'rodog'
  },
  {
      username: 'Sam',
      password:'agyq14143'
  },
  {
      username: 'Luke',
      password:'agagad23de3'
  },
  {
      username: 'Peter',
      password:'agadaf33wd'
  }
]

//User posts - working

const posts = [
  {
      title:'Did we really land on the moon?',
      content:'Im not sure',
      user_id: 2
  },
  {
      title:'What is the queen favourite food?',
      content:'Im not sure',
      user_id: 3
  },
  {
      title:'Is Elon musk a millionaire?',
      content:'Im not sure',
      user_id: 4
  }
]

//User comments - working

const comments = [
  {
      user_id:3,
      content:'worst blog ever',
      post_id:2
  },
  {
      user_id:2,
      content:'terrible blog',
      post_id:2
  }
]



const plantSeeds = async () => {


  await User.bulkCreate(users, { individualHooks: true });
  await Post.bulkCreate(posts);
  await Comment.bulkCreate(comments);

}

plantSeeds();

