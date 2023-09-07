import { Request, Response } from "express";
import { ListOrderService } from "../../Services/Order/ListOrderService";

class ListOrderController {
  async handle(request: Request, response: Response) {
    const listOrderService = new ListOrderService();
    const listOrders = await listOrderService.execute();

    return response.status(200).json(listOrders);
  }
}
export { ListOrderController };
