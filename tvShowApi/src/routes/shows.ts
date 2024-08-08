import { Router } from "express";
import ShowController from "../controllers/ShowController";

const showsRouter = Router();
const showCtrl = new ShowController();

showsRouter.post("/", (req, res) => showCtrl.save(req, res));
showsRouter.get("/shows/:title", (req, res) => showCtrl.findByTitle(req, res));

export default showsRouter;
