const dbConnection = require('../config/connection');
const {
    User,
    Post,
    Comment
} = require('../models');


const users = [

    {
        username: 'Johnny',
        password:'money5353'
    },
    {
        username: 'Marco',
        password:'55553232'
    },
    {
        username: 'Ronny',
        password:'afd33af22'
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

(async () => {
    await User.bulkCreate(users);
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comments);


})();

