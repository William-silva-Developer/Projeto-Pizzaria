import { request, Request, response, Response } from "express";

import { CreateUserService } from "../../../Services/Users/RegisterUser/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.createUser({ name, password, email });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
