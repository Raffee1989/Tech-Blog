const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Very Nice"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Amazing"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! Thanks to everyone"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "We made it."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Good news"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "This is one of our biggest and the most awaited feature. Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;