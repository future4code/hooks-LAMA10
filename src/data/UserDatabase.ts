import { CustomError } from "../error/CustomError";
import { user } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private TABLE = "USUARIOS";

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection(this.TABLE).insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
      });
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string): Promise<user> => {
    try {
      const result = await UserDatabase.connection(this.TABLE)
        .select("*")
        .where("email", "like", email);

      return result[0];
    } catch (error: any) {
      throw new CustomError(404, error.message);
    }
  };
}