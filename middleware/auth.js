import jwt from "jsonwebtoken";
import { user } from "../models/models.user.js";

export const authUser = async (req, res, next) => {
    try{
        const token = req.cookies.authToken;
        console.log(token)
        const data = jwt.verify(token, "my name is pranav suryavanshi")
        const authorisedUser = await user.findOne({_id : data._id})
        console.log(authorisedUser)
        req.user = authorisedUser
        next()
    }
    catch(e)
    {
        console.log(e)
        res.status(400).json({err : "user not authorised"})
    }
}