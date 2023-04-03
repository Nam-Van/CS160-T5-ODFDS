const Sequelize = require('sequelize');

const sequelize=require('./connectDB')

    const restaurant= sequelize.define("restaurant", {
        
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        Name: {
            type: Sequelize.STRING,
            
        },
        Address: {
            type: Sequelize.STRING,
            
        },
        Username: {
            type: Sequelize.STRING,
            
        },
        password: {
            type: Sequelize.STRING,
            
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        }
        
    });

    

    
module.exports= restaurant
