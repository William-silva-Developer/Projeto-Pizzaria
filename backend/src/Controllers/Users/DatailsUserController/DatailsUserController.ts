import { Response, Request } from "express";
import { DatailsUserService } from "../../../Services/Users/DatailsUserService/DatailsUserService";

class DatailsUserController {
  async handle(req: Request, res: Response) {
    const datailsUserService = new DatailsUserService();

    const userDatails = await datailsUserService.excute();
    return res.json(userDatails);
  }
}

export { DatailsUserController };
