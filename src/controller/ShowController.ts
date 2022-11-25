import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowSignupDTO } from "../model/ShowsSignupDTO";

const showBusiness = new ShowBusiness();
export class ShowController {
  public createShow = async (req: Request, res: Response) => {
    try {
      const { weekday, startTime, endTime, bandId } = req.body;

      const input: ShowSignupDTO = {
        weekday: weekday,
        startTime: startTime,
        endTime: endTime,
        bandId: bandId,
      }

      const token = req.headers.authorization as string;

      await showBusiness.createShow(input, token);
      res.status(201).send({ message: "Sucesso!! Show registrado" });
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  }

  public getShowByDay = async (req: Request, res: Response) => {
    try {
      const weekday = req.params.weekday;

      const token = req.headers.authorization as string;

      const showInfo = await showBusiness.getShow(weekday, token);
      res.status(200).send(showInfo);
    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  }
}