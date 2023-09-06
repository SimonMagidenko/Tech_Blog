const { User } = require('../models');

const userData = [

    {
        "username": "user123",
        "email": "user123@example.com",
        "password": "securePass123"
    },
    {
        "username": "codeMaster",
        "email": "codemaster@example.com",
        "password": "coding123"
    },
    {
        "username": "techGuru",
        "email": "techguru@example.com",
        "password": "techPass1234"
    },
    {
        "username": "digitalArtist",
        "email": "digitalartist@example.com",
        "password": "artistic456"
    },
    {
        "username": "cyberNinja",
        "email": "cyberninja@example.com",
        "password": "cyberHaxer789"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;