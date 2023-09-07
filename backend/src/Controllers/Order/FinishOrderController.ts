import { Request, Response } from "express";
import { FinishOrderService } from "../../Services/Order/FinishOrderService";

class FinishOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;
    const finishOrderService = new FinishOrderService();

    const finishOrder = await finishOrderService.execute({
      order_id,
    });
    return res.status(200).json(finishOrder);
  }
}
export { FinishOrderController };
