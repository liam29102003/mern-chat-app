import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

import generateToken from '../utils/generateToken.js';

export const login = async (req, res) => {
   try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            res.status(400).json({msg: "Invalid Username"});
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(400).json({msg: "Invalid Password"});
            return;
        }
        const token = generateToken(user._id, res);
        res.status(201).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic,
        })
   } catch (error) {
        res.status(500).json({msg: "Server Error"});
   }
};
export const logout = (req, res) => {
    try {
        res.cookie("jwt","", {maxAge:0});
        res.status(200).json({msg: "Logout Successful"});
    } catch (error) {
        res.status(500).json({msg: "Server Error"});
    }
};
export const signup = async (req, res) => {
   try {
        const {fullname, username, password, confirmPassword, gender} = req.body;
        if(password !== confirmPassword){
            res.status(400).json({msg: "Passwords do not match"});
            return;
        }
        const user = await User.findOne({username});
        if(user){
            res.status(400).json({msg: "Username is already taken."});
            return;
        }
        const profilePic = "https://i.pravatar.cc/300";
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: profilePic
        });
        if(newUser){
        generateToken(newUser._id, res);
        await newUser.save();
        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic,
        })
        }
        else{
            res.status(500).json({msg: "Something went wrong."});
        }

        
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
};