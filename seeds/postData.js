const { Post } = require("../models");

const postData = [
  {
    title: "Scientists teach a fish to do math",
    body: "The scientist were able to teach the fish to do simple addition and subtraction.",    
    userId: 3,
  },
  {
    title: "3D printing could create the cities of tomorrow",
    body: "3D printed buildings are cheaper, use less labor, and are more resilient than conventional buildings.",    
    userId: 1,
  },
  {
    title: "Europe car dealers running out of chips",
    body: "Some car dealers in Europe didn't stock pile enough chips, so now their cars are delayed up to a year",    
    userId: 2,
  },
  {
    title: "Samsung will let users repair their own Galaxy device",
    body: "Samsung will give third party companies access to a step-by-step guide on repairing the phone, as well as genuine galaxy parts and repair tools",    
    userId: 5,
  },
  {
    title: "Instacart valuation down",
    body: "Instacart valuation has dropped down to $24 billion after reaching $39 billion in the first year of the pandemic",    
    userId: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
