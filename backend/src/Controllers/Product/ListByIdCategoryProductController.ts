import { Response, Request } from "express";
import { ListByIdCategoryProductService } from "../../Services/Product/ListByIdCategoryProductService";

class ListByIdCategoryProductController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const listByIdCategoryProductService = new ListByIdCategoryProductService();

    const listCategoryProduct = await listByIdCategoryProductService.excute({
      category_id,
    });

    return res.status(200).json(listCategoryProduct);
  }
}

export { ListByIdCategoryProductController };
