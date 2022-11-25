import { bandSignupDTO } from "../model/BandSignupDTO";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {
  private TABLE = "BANDAS"
  
  public insertBand = async (input: bandSignupDTO, id: string) => {
    try {
      const { name, musicalGenre, responsible } = input;
      await BandDatabase.connection(this.TABLE).insert({
        id,
        name,
        music_genre: musicalGenre,
        responsible,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  }

  public getBandByName = async (bandName: string) => {
    try {
      const band = await BandDatabase.connection(this.TABLE)
        .select("*")
        .where({ name: bandName });

      return band;
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  }
}