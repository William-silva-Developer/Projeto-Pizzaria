import { Request, Response } from "express";
import { AuthUserService } from "../../../Services/Users/AuthUser/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUser = new AuthUserService();

    const auth = await authUser.loginUser({ password, email });

    return res.status(200).json(auth);
  }
}

export { AuthUserController };
