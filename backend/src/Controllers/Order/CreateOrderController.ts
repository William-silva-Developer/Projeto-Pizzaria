import { Response, Request } from "express";
import { CreateOrderService } from "../../Services/Order/CreateOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { table, name } = req.body;

    const createOrderService = new CreateOrderService();

    if (!table) {
      throw new Error("Please enter the table number");
    }

    const order = await createOrderService.execute({
      table,
      name,
    });

    return res.status(200).json(order);
  }
}

export { CreateOrderController };
