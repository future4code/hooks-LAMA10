import { BandDatabase } from "../data/BandDatabase";
import {
  BandAlreadyRegistered,
  InvalidFields,
  InvalidToken,
  MissingInformation,
  Unauthorized,
} from "../error/CustomError";
import { bandInfoDTO } from "../model/BandInfoDTO";
import { bandSignupDTO } from "../model/BandSignupDTO";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();

export class BandBusiness {
  private bandDatabase: BandDatabase;
  constructor() {
    this.bandDatabase = new BandDatabase();
  }

  public signupBand = async (input: bandSignupDTO, token: string) => {
    const { name, musicalGenre, responsible } = input;

    if (!token) {
      throw new InvalidToken();
    }

    const tokenData = authenticator.getTokenData(token);

    if (tokenData.role != "admin") {
      throw new Unauthorized();
    }

    if (!name || !musicalGenre || !responsible) {
      throw new MissingInformation();
    }

    const band = await this.bandDatabase.getBandByName(name);

    if (band[0] != undefined) {
      throw new BandAlreadyRegistered();
    }

    const id = idGenerator.generateId();

    await this.bandDatabase.insertBand(input, id);
  };

  public getBandInfo = async (input: bandInfoDTO, token: string) => {
    const bandName = input.bandName;

    if (!token) {
      throw new InvalidToken();
    }

    if (!bandName) {
      throw new InvalidFields();
    }

    const bandInfo = await this.bandDatabase.getBandByName(bandName);

    return bandInfo;
  };
}