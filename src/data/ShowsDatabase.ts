import { BaseDatabase } from "./BaseDatabase";
import { ShowModel, ShowSignupDTO } from "../model/ShowsSignupDTO";

export class ShowsDatabase extends BaseDatabase {
  private TABLE = "SHOWS";
  
  public createShow = async (input: ShowModel, id: string) => {
    try {
      const { bandId, weekday, startTime, endTime } = input;
      await ShowsDatabase.connection(this.TABLE).insert({
        id,
        week_day: weekday,
        start_time: startTime,
        end_time: endTime,
        band_id: bandId,
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  }
  
  public alreadyExist = async (
    weekday: string,
    startTime: number
  ): Promise<any> => {
    const [result] = await ShowsDatabase.connection(this.TABLE)
      .select("*")
      .where({
        week_day: weekday,
        start_time: startTime,
      });
    return result;
  };

  public getShowByDay = async (weekday: string): Promise<any> => {
    try {
      const result = await ShowsDatabase.connection(this.TABLE)
        .select("BANDAS.name", "BANDAS.music_genre", "SHOWS.start_time", "SHOWS.end_time")
        .join("SHOWS", "BANDAS.id", "SHOWS.band_id")
        .where("week_day", "like", weekday)
        .orderBy("start_time", "asc")
        .into("BANDAS")
         
        return result

    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  };
}