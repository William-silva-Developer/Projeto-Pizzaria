import { Request, Response } from "express";
import { ProductService } from "../../Services/Product/ProductService";

class ProductController {
  async handle(req: Request, res: Response) {
    const { name, description, price, category_id } = req.body;

    const { filename: banner } = req.file;

    const productService = new ProductService();

    if (!req.file) {
      throw new Error("Error upload image");
    } else {
      const product = await productService.execute({
        name: name,
        description: description,
        price: price,
        banner: banner,
        category_id: category_id,
      });

      return res.status(201).json(product);
    }
  }
}

export { ProductController };
