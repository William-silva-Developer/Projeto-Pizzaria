import { Router, Request, Response } from "express";
import { CreateUserController } from "./Controllers/Users/RegisterUserController/CreateUserController";
import { AuthUserController } from "./Controllers/Users/AuthUserController/AuthUserController";

const router = Router();

//ROTA PARA CRIAR USUÁRIO
router.post("/users", new CreateUserController().handle);

//ROTA PARA AUTENTICAR O USUÁRIO
router.post("/session", new AuthUserController().handle);

export { router };
