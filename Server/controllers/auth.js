import {db} from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res)=>{
    //Check existing users
    const q = "SELECT * FROM restaurants WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.name], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

        //hash passwords and create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO restaurants(`username`, `password`,`email`, `name`, `address`) VALUES (?)"
        const values = [
            req.body.username,
            hash,
            req.body.email,
            req.body.name,
            req.body.address
        ]

        db.query(q,[values], (err,data)=>{
            if (err) return res.json(err);
            return res.status(200).json("User has been created");
        });
    });
};

//it isn't working. FIX
export const dregister = (req, res)=>{
    //Check existing users
    const q = "SELECT * FROM drivers WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.name], (err,data)=>{
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!");

        //hash passwords and create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO drivers(`username`, `password`, `email`, `drivers_license_number`, `license_plate_number`, `F_name`, `L_name`) VALUES (?)"
        const values = [
            req.body.username,
            hash,
            req.body.email,
            req.body.drivers_license_number,
            req.body.license_plate_number,
            req.body.F_name,
            req.body.L_name
        ]

        db.query(q,[values], (err,data)=>{
            if (err) return res.json(err);
            return res.status(200).json("User has been created");
        });
    });
};

export const login = (req,res)=>{
    //Check user credentials
    const q = "SELECT * FROM restaurants WHERE username = ?";
    db.query(q, [req.body.username], (err, data)=>{
        if (err) return res.json(err);
        if(data.length === 0) return res.status(404).json("User not found!");
    
        // check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) 
            return res.status(400).json("Wrong username or password!");

    
        const token = jwt.sign({id: data[0].id}, "jwtkey");
        const {password, ...other} = data[0];

        res.cookie("access_token", token,{
            httpOnly: true
        }).status(200).json(other);

    });
};

export const dlogin = (req,res)=>{
    //Check user credentials
    const q = "SELECT * FROM drivers WHERE username = ?";
    db.query(q, [req.body.username], (err, data)=>{
        if (err) return res.json(err);
        if(data.length === 0) return res.status(404).json("User not found!");
    
        // check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) 
            return res.status(400).json("Wrong username or password!");

    
        const token = jwt.sign({id: data[0].id}, "jwtkey");
        const {password, ...other} = data[0];

        res.cookie("access_token", token,{
            httpOnly: true
        }).status(200).json(other);

    });
};

export const logout = (req,res)=>{

    res.clearCookie("access_token",{
        sameSite:"none",
        secure: true
    }).status(200).json("User has been logged out.")
};
