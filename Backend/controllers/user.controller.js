import User from '../models/user.model.js';
export const getUsersForSideBar = async (req, res) => {
    try {
        console.log(req.user);
        const loggedInUserId = req.user._id;
        const allUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password"); 
        
        res.status(200).json(allUsers);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }

}