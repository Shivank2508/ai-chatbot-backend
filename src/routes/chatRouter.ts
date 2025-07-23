import { Router } from "express";

const chatRouter = Router();

chatRouter.get("/chat", (req, res) => {
    res.json({ message: "Chat route is working!" });
});

export default chatRouter;