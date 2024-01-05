import { user } from "../models/models.user.js";
import jwt from "jsonwebtoken";
const secret = "my name is pranav suryavanshi"

export const register = async (req, res) => {
    const { username, email, password, cpassword, fname, lname } = req.body;

    const userExists = await user.findOne({ email })

    if (userExists) res.status(400).json({ error: "User already exists" })
    else {
        const userNameExists = await user.findOne({ username })
        if (!userNameExists) {
            if ((password === cpassword)) {
                const newUser = new user({ username, email, password, fname, lname })
                const result = await newUser.save()
                res.status(200).json({ success: "user created successfully" })
                console.log(newUser)
                console.log(result)
            }
            else {
                res.status(400).json({ error: "passwords did not match" })
            }
        }
        else res.status(400).json({ error: "Username alredy exists. Please choose another one" })
    }
}

export const login = async (req, res) => {

    const { email, password } = req.body;

    const userExists = await user.findOne({ email })

    if (!userExists) res.status(400).json({ error: "user does not exists" })
    else {
        if(password === userExists.password)
        {
            const token = jwt.sign({_id : userExists._id}, secret)
            console.log(token)
            res.cookie("authToken", token)
            res.status(201).json({success : "login sucessful", data : userExists})
        }
        else res.status(400).json({error : "invalid email or password"})
    }
}

export const getProfile = async (req, res) => {
    const username = req.body.username
    console.log(username)
    const User = await user.findOne({username})
    console.log(User)
    res.status(200).json({url : User.profile})
}