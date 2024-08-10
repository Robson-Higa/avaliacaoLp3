import { Router } from "express";
import ShowController from "../controllers/ShowController";

const showsRouter = Router();
const showCtrl = new ShowController();

showsRouter.post("/", (req: any, res: any) => showCtrl.save(req, res));
showsRouter.get("/shows/:title", (req: any, res: any) => showCtrl.findByTitle(req, res));

export default showsRouter;
