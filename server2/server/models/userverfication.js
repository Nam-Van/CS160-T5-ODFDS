const Sequelize = require('sequelize');

const sequelize=require('./connectDB')

    const userverfiaion= sequelize.define("userverfiaion", {
        
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        uniqueString: {
            type: Sequelize.STRING,
            allowNull: false,
          },
        userId: {
            type: Sequelize.STRING,
            allowNull: false,
            
        },
      
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
        
    });

    

    
module.exports= userverfiaion
