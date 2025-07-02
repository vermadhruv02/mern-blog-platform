import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler';
import { ApiError } from '../utils/ApiError'
import { User } from '../models/user.model'
import mongoose from 'mongoose';

interface JwtPayload {
  id:  mongoose.Types.ObjectId;
}

export const verifyJWT = asyncHandler(async (req,_ ,next)=>{
    try {
        // console.log(req.cookies);
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
        // console.log( token );
    
        if(!token) throw new ApiError(401, "Unauthorized request");
        
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload;
        // console.log(decodedToken);

        const user = await User.findById(decodedToken?.id as mongoose.Types.ObjectId).select("-password -refreshToken");
        // console.log(user);
        
        if(!user) throw new ApiError(401, "Invalid Access Token");
        req.user = user;
        next();
    } catch (error) {
  if (error instanceof Error) {
    throw new ApiError(401, error.message);
  }
  throw new ApiError(401, "Invalid Access Token");
}


});