import { Request, Response } from "express";
import { CategoryService } from "../../Services/Categoria/CategoryService";

class CategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const categoryService = new CategoryService();

    const category = await categoryService.execute({ nameCategory: name });

    return res.status(200).json(category);
  }
}

export { CategoryController };
