// Routes: This will contains all the routes and endpoints 
//         required for the server and also thier required files 
//         like for authentication routes we can create a file 
//         and setup routes.


import { Router } from "express";
import helloRouter from "./helloRoutes.js";
import chatRouter from "./chatRouter.js";
import userRouter from "./userRoutes.js";

const router = Router();

router.use("/hello", helloRouter)
router.use("/user", userRouter);
router.use("/chat", chatRouter);



export default router;