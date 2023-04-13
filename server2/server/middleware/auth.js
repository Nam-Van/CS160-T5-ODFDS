const jwt = require('jsonwebtoken');

const auths = {};
const Driver=require('../models/driver')
const Restaurant=require('../models/restaurant')


auths.resAuth  = (req, res, next) => {
 
    var token
    try {  
     
        console.log("object");
        
            token = req.headers.authorization.split(" ")[1];
            console.log("🚀 ~ file: check-auth.js ~ line 12 ~ token", token)
           
         
          
            if (token) {
                const decodedToken = jwt.verify(token, "hamada");
                const restaurant=Restaurant.findByPk(decodedToken)
                console.log("🚀 ~ file: auth.js:21 ~ driver:", restaurant)
                if (!restaurant) {
                    throw new Error("not authenticated");
                }
                req.userData = restaurant;
                next();
            } else {
                handleError(null, next);
            }
        
    } catch (error) {
        handleError(error, next);
    }
};


auths.driverAuth = (req, res, next) => {
 
    var token
    try {  
     
        
            token = req.headers.authorization.split(" ")[1];
            console.log("🚀 ~ file: check-auth.js ~ line 12 ~ token", token)
           
            console.log("object");
         
          
            if (token) {
                console.log("object");
                const decodedToken = jwt.verify(token, "hamada");
                console.log("🚀 ~ file: auth.js:54 ~ decodedToken:", decodedToken)
                const driver=Driver.findByPk(decodedToken.id)
                console.log("🚀 ~ file: auth.js:21 ~ driver:", driver)
                if (!driver) {
                    throw new Error("not authenticated");
                }
                req.userData = driver;
                next();
            } else {
                handleError(null, next);
            }
        
    } catch (error) {
        handleError(error, next);
    }
};

module.exports = auths