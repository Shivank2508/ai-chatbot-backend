import { Router } from "express";
import { getAllUsers, postUserLogin, postUserSignup } from "../controllers/userController.js";
import { LoginValidator, SignupValidator, validator } from "../utils/validators.js";

const userRouter = Router();

userRouter.get("", getAllUsers)
userRouter.post("/signup", validator(SignupValidator), postUserSignup)
userRouter.post("/login", validator(LoginValidator), postUserLogin)

export default userRouter;