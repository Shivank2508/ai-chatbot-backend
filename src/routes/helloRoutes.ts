import { Router } from "express";

const helloRouter = Router()

helloRouter.get("/", (req, res) => {
    res.json({ message: "Hello, world! I am making backend file structure" });
});
export default helloRouter;