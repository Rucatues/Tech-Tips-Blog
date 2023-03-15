const { User } = require('../models/user');

const UserData = [
    {
        username: "UserNumeroUno",
        email: "UserNumeroUno@gmail.com",
        password: "UserNumeroUnoTestPassword"
    },
    {
        username: "UserNumeroDos",
        email: "UserNumeroDos@gmail.com",
        password: "UserNumeroDosTestPassword"
    },
    {
        username: "UserNumeroTres",
        email: "UserNumeroTres@gmail.com",
        password: "UserNumeroTresTestPassword"
    },

];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser; 