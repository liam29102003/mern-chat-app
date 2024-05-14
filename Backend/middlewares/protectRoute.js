import  jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).json({msg: "Unauthorized"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            res.status(401).json({msg: "Unauthorized"});
        }
        const user =  await User.findById(decoded.id).select("-password");
        if(!user){
            res.status(401).json({msg: "User not found"});
        }
        req.user = user;
        console.log(req.user);
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Server Error"});
    }
}
export default protectRoute;