import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    if (!id) {
        throw new Error("User ID is required to create a token.");
    }
    return jwt.sign({ id }, process.env.JWT_SECRET); // Token expires in 7 days
};

//Route for user login
const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await userModel.findOne({email});

        //Check user already exists or not
        if (!user) {
            return res.json({sucess : false, msg: "User doesn't exists"})
        }
        //Varification the password
        const isMatch = await bcrypt.compare(password,user.password);
        if (isMatch) {
            const token = createToken(user.id)
            res.json({sucess:true,token})
        }else{
            res.json({sucess:false,message:'Invalid credentials'})
        }
    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.msg})
    }
}

//Route for user registration
const registerUser =async(req,res)=>{
    try {
        
        const {name,email,password} = req.body;

        //Checking user already exist or not
        const exist = await userModel.findOne({email})
        if (exist) {
            return res.json({sucess : false, msg: "User already exists"})
        }
        //Validation email format & strong password 
        if (!validator.isEmail(email)) {
            return res.json({sucess : false, msg: "Please enter a valid email"})
        }
        if (password.length < 8) {
            return res.json({sucess : false, msg: "Please enter a strong password"})
        }

        //Hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password : hashedPassword
        })

        //save the user from database
        const user = await newUser.save()
        //checking the real user using Json-Web-Token
        const token = createToken(user.id)
        res.json({sucess:true , token})


    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.msg})
    }
}

//Route for Admin login
const adminLogin=async(req,res)=>{

    try {
        
        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {

            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({sucess:true, token})
        }else{
            res.json({sucess:false,message:"Invalid Credintials"})
        }

    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.msg})
    }

}
export {loginUser , registerUser , adminLogin}