import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { bandInfoDTO } from "../model/BandInfoDTO";
import { bandSignupDTO } from "../model/BandSignupDTO";

const bandBusiness = new BandBusiness();
export class BandController {
  public signupBand = async (req: Request, res: Response) => {
    try {
      const { name, musicalGenre, responsible } = req.body;
      const token = String(req.headers.authorization);

      const input: bandSignupDTO = {
        name,
        musicalGenre,
        responsible,
      };
      await bandBusiness.signupBand(input, token);
      res.status(201).send(`Banda ${name} cadastrada com sucesso`);
      console.log(input);
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };

  public getBandInfo = async (req: Request, res: Response) => {
    try {
      const bandName = req.params.name;
      const token = String(req.headers.authorization);

      const input: bandInfoDTO = {
        bandName,
      };

      const bandInfo = await bandBusiness.getBandInfo(input, token);
      res.status(201).send(bandInfo);
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };
}