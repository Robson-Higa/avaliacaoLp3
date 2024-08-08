import express from "express";
import dotenv from "dotenv-flow";
import cors from "cors";
import logger from "morgan";
import {connectToDB} from "./config/db";
import showsRouter from "./routes/shows";

dotenv.config();

connectToDB();

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.post("/shows", showsRouter);
app.get("/shows/:title", (req, res) => res.send("Tv Show API"));

export default app;
