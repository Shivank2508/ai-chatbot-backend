import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import router from "./routes/index.js";
config();
const app = express();
//GET
//PUT
//POST
//DELETE
// Midleware
app.use(express.json());
app.use(morgan("dev")); // Logging middleware
app.use("/app/v1", router); // Use your route
export default app;
//# sourceMappingURL=app.js.map