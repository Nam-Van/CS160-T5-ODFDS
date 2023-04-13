var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer= require('nodemailer');
const Driver=require('../models/driver')
const Restaurant=require('../models/restaurant')
const Userverfication=require('../models/userverfication')
let transporter = nodemailer.createTransport({
  service:"gmail",
  secure: false, // true for 465, false for other ports
  auth: {
    user: "match.maker.montu@gmail.com", // generated ethereal user
    pass: "dzkyusjbsiggxgyj", // generated ethereal password
  },
});

/* GET users listing. */
router.post('/signup',  async function(req, res, next) {
 try {
  if(!req.body.password)
  {
    throw new Error("User not found")
  }
  const password = await bcrypt.hash(req.body.password, 8);
  const restaurant=Restaurant.create({...req.body, password})
  await sendVerificationEmail(restaurant.id,restaurant.email),
  res.send(restaurant);
 } catch (error) {
  res.send(error);
 }
});


router.post('/login',  async function(req, res, next) {
  try {
//console.log("object");

   if(!req.body.password&&!req.body.email) 
   {
     throw new Error("User not found")
   }
   console.log({ email: req.body.email });
   let user = await Restaurant.findOne({where:{ email: req.body.email }});

   console.log("🚀 ~ file: driver.js:30 ~ router.post ~ user:", user)
   if(!user){
   
    throw new Error("User not found")
  
} 
if(user.dataValues.status==0){

throw new Error("You have to verifey your email")

} 

   const ismatch = await bcrypt.compare(req.body.password, user.password);


   if (!ismatch) {
    throw new Error("User not found")
  }
console.log("object");
  const token = jwt.sign({ id: user.id.toString() }, "hamada", {
    expiresIn: "24h", // expires in 365 days
  });
   user.password=undefined,
   console.log({ email: req.body.email });
   res.send({user,token});
  } catch (error) {
   res.send({error:error.toString()});
  }
 });
 const sendVerificationEmail = async(_id,email) => {

  console.log("🚀 ~ file: user.js ~ line 64 ~ sendVerificationEmail ~ email", email)
  console.log("🚀 ~ file: user.js ~ line 79 ~ sendVerificationEmail ~ process.env.AUTH_EMAIL,", process.env.AUTH_EMAIL,)
  console.log("🚀 ~ file: user.js ~ line 67 ~ sendVerificationEmail ~ process.env.CURRENTURL", process.env.CURRENTURL)
  console.log("🚀 ~ file: user.js ~ line 69 ~ sendVerificationEmail ~ process.env.JWT_KEY", process.env.JWT_KEY)

  console.log("🚀 ~ file: user.js ~ line 98 ~ sendVerificationEmail ~ _id", _id)

  //url to be used in the email 
  try{
      //console.log(68);
      //
      const currenturl =  "http://localhost:3000/" //process.env.CURRENTURL
      //console.log(70);
      const hashstring=_id.toString()+"hamada"
      console.log(hashstring);
      const uniqueString = await bcrypt.hash(hashstring, 8);
      console.log("🚀 ~ file: driver.js:97 ~ sendVerificationEmail ~ uniqueString:", uniqueString)

      //console.log("1");

      const newVerification = new Userverfication({
          userId : _id,
          email:email,
          uniqueString: uniqueString,
         
      })  
     //console.log(${currenturl} + "api/driver/verify/" + _id );

      const mailOptions = {
          from : "match.maker.montu@gmail.com",
          to: email,
          subject : " Verify Your Email",
          html: `<p> Verify the email address to complete the signup and login to your account. <> </p> 
          <p> This Link <b> expires in 6 hours </p> </p> <p> Press <a href=${currenturl + "restaurant/verify/" + _id + "?hash=" + uniqueString}> here </a> to proceed </p>`

      }

      console.log("object");
      await newVerification.save()
      console.log("saved");

      const info= transporter.sendMail(mailOptions,(err)=>{
          //console.log("inside")
          if(err){
          console.log("error in nodemailer")
          console.log("🚀 ~ file: user.js ~ line 93 ~ awaittransporter.sendMail ~ err", err?.toString())
      }})
      console.log("🚀 ~ file: user.js ~ line 99 ~ info ~ info", info?.toString())
      console.log("sent")

  }catch(e){
      console.log("101");
      console.log(e);
  }
}
router.get('/verify/:userId', async(req,res) => {
  try{
     //console.log("🚀 ~ file: driver.js:138 ~ router.get ~ req:", req)
    // console.log("1"); 
     let userId=req.params.userId;
      	let uniqueString = req.query.hash;
      	//uniqueString =uniqueString.toString().replaceAll("por21Ld",'/').replaceAll('xMl3Jk','+').replaceAll('Ml32','=')
      //  console.log("1"); 
	
      	const result=await Userverfication.findOne({where:{userId:userId}})
        //console.log("2");
      	const user=   await Driver.findByPk(userId)
     //console.log("1"); 

      	//console.log("🚀 ~ file: user.js ~ line 108 ~ exports.verify=async ~ result", result)
        console.log(result.dataValues);
      	if(result.dataValues ){
          	let hasheduniqueString = result.dataValues.uniqueString
              	console.log("🚀 ~ file: user.js ~ line 111 ~ exports.verify=async ~ hasheduniqueString", hasheduniqueString)
              	console.log("🚀 ~ file: user.js ~ line 113 ~ exports.verify=async ~ hasheduniqueString", hasheduniqueString)
              	if(uniqueString===hasheduniqueString){
              	console.log("her");
              	user.status=true
              	await user.save();
              	/*  await User.updateOne({_id:userId},{verified:true})  */
              	await Userverfication.destroy( {where: { id:userId  }})
              	}
      	}
       // console.log("3");
      	
      	res.redirect(301, "https://sebhastian.com/sequelize-delete/")
	
  	} catch (e){
      //console.log("object");
      	res.status(400).send(e)
  	}
	}
)
module.exports = router;