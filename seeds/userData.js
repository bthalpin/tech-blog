const { User } = require("../models");

const userData = [
  {
    username: "Frank",
    email: "frank@gmail.com",
    password: "12345678",
  },
  {
    username: "Steve",
    email: "steve@gmail.com",
    password: "12345678",
  },
  {
    username: "Julie",
    email: "julie@gmail.com",
    password: "12345678",
  },
  {
    username: "Sean",
    email: "Sean@gmail.com",
    password: "12345678",
  },
  {
    username: "Jorge",
    email: "Jorge@gmail.com",
    password: "12345678",
  },
  {
    username: "Ben",
    email: "Ben@gmail.com",
    password: "12345678",
  },
  {
    username: "Matt",
    email: "Matt@gmail.com",
    password: "12345678",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
