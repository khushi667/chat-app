import jwr from 'jsonwebtoken';
import User from '../models/user.model.js';
const protectRoute = async(req, res, next) => {
    try{
        const token = req.cookie.jwt;
        if(!token){
            return res.staus(401).json({error: "Unauthorized - No Token Provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return  res.staus(401).json({error: "Unauthorized - No Token Provided"});
        }

        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.staus(404).json({error: "User not found"});
        }
        req.user = user
        next()
    } catch(error){
        res.status(500)({error:"Internal server error"});
    }
};

export default protectRoute;