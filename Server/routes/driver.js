var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Driver=require('../models/driver')
const Restaurant=require('../models/restaurant')
/* GET users listing. */
router.post('/signup',  async function(req, res, next) {
 try {
  if(!req.body.password)
  {
    throw new Error("User not found")
  }
  const password = await bcrypt.hash(req.body.password, 8);
  const driver=Driver.create({...req.body, password})
  res.send(driver);
 } catch (error) {
  res.send(error);
 }
});


router.post('/login',/* auth.driverAuth */async function(req, res, next) {
  try {
   if(!req.body.password&&!req.body.email) 
   {
     throw new Error("User not found")
   }
   console.log({ email: req.body.email });

   let user = await Driver.findOne({where:{ email: req.body.email }});

   console.log("🚀 ~ file: driver.js:30 ~ router.post ~ user:", user)
    if(!user){
   
          throw new Error("User not found")
        
   } 

   const ismatch = await bcrypt.compare(req.body.password, user.password);

   if (!ismatch) {
    throw new Error("User not found")
  }
   
   
  const token = jwt.sign({ id: user.id.toString() }, "hamada", {
    expiresIn: "24h", // expires in 365 days
  });
   
  user.password=undefined
console.log({ email: req.body.email });
   res.send({user,token});
  } catch (error) {
    res.send({error:error.toString()});
  }
 });

module.exports = router;