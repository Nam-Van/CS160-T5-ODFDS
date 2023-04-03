
const Sequelize = require('sequelize');


const sequelize = new Sequelize("t5", "root", "123456", { "host": "127.0.0.1",
"dialect": "mysql"});

module.exports=sequelize