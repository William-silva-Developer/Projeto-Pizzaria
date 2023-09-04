import { Response, Request } from "express";
import { DatailsUserService } from "../../../Services/Users/DatailsUserService/DatailsUserService";

class DatailsUserController {
  async handle(req: Request, res: Response) {
    const datailsUserService = new DatailsUserService();

    const user_id = req.user_id;
    console.log("ID DO USUARIO:", user_id);

    const userDatails = await datailsUserService.excute(user_id);
    return res.json(userDatails);
  }
}

export { DatailsUserController };
