const { Comment } = require('../models');

const commentData = [
    {
        comment_input: "This is amazing!",
        user_id: 1,
        post_id: 2,
    },
    {
        comment_input: "Great job!",
        user_id: 1,
        post_id: 3,
    },
    {
        comment_input: "I can't believe it!",
        user_id: 2,
        post_id: 4,
    },
    {
        comment_input: "Impressive work!",
        user_id: 2,
        post_id: 1,
    },
    {
        comment_input: "This is groundbreaking!",
        user_id: 3,
        post_id: 2,
    },
    {
        comment_input: "Incredible!",
        user_id: 3,
        post_id: 3,
    },
    {
        comment_input: "I'm blown away!",
        user_id: 4,
        post_id: 4,
    },
    {
        comment_input: "I want to learn more!",
        user_id: 4,
        post_id: 1,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;