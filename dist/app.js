import express from "express";
import { config } from "dotenv";
config();
const app = express();
//GET
//PUT
//POST
//DELETE
// Midleware
app.use(express.json());
export default app;
//# sourceMappingURL=app.js.map