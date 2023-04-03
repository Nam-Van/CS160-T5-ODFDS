const Sequelize = require('sequelize');

const sequelize=require('./connectDB')

    const Driver= sequelize.define("drivers", {
        
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Username: {
            type: Sequelize.STRING,
            allowNull: false,
            
        },
        P_word: {
            type: Sequelize.STRING,
            
        },
        Driver_Name: {
            type: Sequelize.STRING,
            allowNull: false,

            
        },
        is_Active: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
            
        },
        is_Available: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
            
        },
        current_Location: {
            type: Sequelize.STRING,
            
        },
        number_Orders: {
            type: Sequelize.INTEGER,
            defaultValue:0
        },
        picture: {
            type: Sequelize.STRING,
          
        },
      
        password: {
            type: Sequelize.STRING,
            allowNull: false,

            
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
        
    });

    

    
module.exports= Driver
