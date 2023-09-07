import { Router, Request, Response } from "express";
import multer from "multer";

import { CreateUserController } from "./Controllers/Users/RegisterUserController/CreateUserController";
import { AuthUserController } from "./Controllers/Users/AuthUserController/AuthUserController";
import { DatailsUserController } from "./Controllers/Users/DatailsUserController/DatailsUserController";
import { isAuthenticated } from "./Middlewares/AuthorizedRoute/IsAuthenticated";
import { CategoryController } from "./Controllers/Categoria/CategoryController";
import { ListCategoryController } from "./Controllers/Categoria/ListCategoryController";
import { ProductController } from "./Controllers/Product/ProductController";

import uploadConfig from "./Config/Multer";
import { ListByIdCategoryProductController } from "./Controllers/Product/ListByIdCategoryProductController";
import { CreateOrderController } from "./Controllers/Order/CreateOrderController";
import { DeleteOrderController } from "./Controllers/Order/DeleteOrderController";
//------------------------------------------------------------------------------

const router = Router();

const uploadImage = multer(uploadConfig.upload("../temp"));

//ROTA PARA CRIAR USUÁRIO
router.post("/users", new CreateUserController().handle);

//ROTA PARA AUTENTICAR O USUÁRIO
router.post("/session", new AuthUserController().handle);

//  ROTA PARA BUSCAR DETALHES DO USUÁRIO
router.get("/me", isAuthenticated, new DatailsUserController().handle);

////////////////////////////////////////////////////////////////////////////////////////////////
//CADASTRAR UMA CATEGORIA
router.post("/category", isAuthenticated, new CategoryController().handle);
//LISTAR TODAS AS CATEGORIAS
router.get("/category", isAuthenticated, new ListCategoryController().handle);

//LISTAR TODOS OS PRODUTOS POR CATEGORIA
router.get(
  "/category/products",
  isAuthenticated,
  new ListByIdCategoryProductController().handle
);

////////////////////////////////////////////////////////////////////////////////////////////////
//CADASTRAR UM PRODUTO
router.post(
  "/product",
  isAuthenticated,
  uploadImage.single("file"),
  new ProductController().handle
);

////////////////////////////////////////////////////////////////////////////////////////////////////////
//ABRIR UMA ORDER
router.post("/order", isAuthenticated, new CreateOrderController().handle);

//DELETAR UMA ORDER - PERDIDO
router.delete("/order", isAuthenticated, new DeleteOrderController().handle);

export { router };
