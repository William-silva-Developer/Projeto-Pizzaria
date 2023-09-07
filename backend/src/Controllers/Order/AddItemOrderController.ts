import { Request, Response } from "express";
import { AddItemOrderService } from "../../Services/Order/AddItemOrderService";

class AddItemOrderController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body;
    const addItemOrderService = new AddItemOrderService();

    const itemOrder = await addItemOrderService.execute({
      amount,
      order_id,
      product_id,
    });

    return res.status(201).json(itemOrder);
  }
}

export { AddItemOrderController };
