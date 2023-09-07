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
import { AddItemOrderController } from "./Controllers/Order/AddItemOrderController";
import { RemoveItemController } from "./Controllers/Order/RemoveItemController";
import { SendOrderController } from "./Controllers/Order/SendOrderController";
import { ListOrderController } from "./Controllers/Order/ListOrderController";
import { DetailsOrderController } from "./Controllers/Order/DetailsOrderController";
import { FinishOrderController } from "./Controllers/Order/FinishOrderController";
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

//ADICIONANDO ITEM A ORDER - PERDIDO
router.post("/order/add", isAuthenticated, new AddItemOrderController().handle);

//REMOVER ITEM
router.delete(
  "/order/removeItem",
  isAuthenticated,
  new RemoveItemController().handle
);

//UPDATE NO DRAFT- TIRAR PERDIDO DE RASCUNHO
router.put(
  "/order/sendOrder",
  isAuthenticated,
  new SendOrderController().handle
);

//LISTAR ORDERS - PERDIDOS
router.get("/orders", isAuthenticated, new ListOrderController().handle);

//LISTAR DETALHES DA ORDERS - PERDIDO
router.get(
  "/order/details",
  isAuthenticated,
  new DetailsOrderController().handle
);

//FINALIZADO ORDERS - PERDIDO
router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);

export { router };
