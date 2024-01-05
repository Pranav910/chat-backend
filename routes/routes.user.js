import express from "express";
import { getProfile, login, register } from "../controllers/controllers.user.js";
import { authUser } from "../middleware/auth.js";
const router = express.Router()
// import cookieParser from "cookie-parser";
// router.use(cookieParser())

router.post("/register", register);
router.post("/login", login);
router.post("/getProfile", getProfile);

export default router