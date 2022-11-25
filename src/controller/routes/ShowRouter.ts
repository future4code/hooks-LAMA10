import express from "express";
import { ShowController } from "../ShowController";

export const showRouter = express.Router();
const showController = new ShowController();

showRouter.post("/addshow", showController.createShow);
showRouter.get("/infoshow/:weekday", showController.getShowByDay)