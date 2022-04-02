const { Comment } = require("../models");

const commentData = [
  {
    userId: 2,
    postId: 1,
    body: "That's really cool",
  },
  {
    userId: 6,
    postId: 2,
    body: "Some good information",
  },
  {
    userId: 4,
    postId: 3,
    body: "Interesting",
  },
  {
    userId: 1,
    postId: 4,
    body: "I didn't know that",
  },
  {
    userId: 3,
    postId: 5,
    body: "I can't believe it",
  },
  {
    userId: 5,
    postId: 1,
    body: "Seems like a good Idea",
  },
  {
    userId: 6,
    postId: 1,
    body: "hmm",
  },
  {
    userId: 1,
    postId: 3,
    body: "Oh no",
  },
  {
    userId: 5,
    postId: 2,
    body: "That's cool",
  },
  {
    userId: 7,
    postId: 5,
    body: "I'll take note of that",
  },
  {
    userId: 1,
    postId: 4,
    body: "So amazing",
  },
  {
    userId: 5,
    postId: 1,
    body: "I can't believe it",
  },
  {
    userId: 2,
    postId: 2,
    body: "Very nice",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;