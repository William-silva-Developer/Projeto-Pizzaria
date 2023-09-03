import { Router, Request, Response } from "express";
import { CreateUserController } from "./Controllers/Users/RegisterUserController/CreateUserController";
import { AuthUserController } from "./Controllers/Users/AuthUserController/AuthUserController";
import { DatailsUserController } from "./Controllers/Users/DatailsUserController/DatailsUserController";
import { isAuthenticated } from "./Middlewares/AuthorizedRoute/IsAuthenticated";

//------------------------------------------------------------------------------

const router = Router();

//ROTA PARA CRIAR USUÁRIO
router.post("/users", new CreateUserController().handle);

//ROTA PARA AUTENTICAR O USUÁRIO
router.post("/session", new AuthUserController().handle);

//  ROTA PARA BUSCAR DETALHES DO USUÁRIO
router.get("/me", isAuthenticated, new DatailsUserController().handle);

export { router };
