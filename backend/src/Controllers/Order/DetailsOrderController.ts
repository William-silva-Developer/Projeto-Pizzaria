import { Request, Response } from "express";
import { DetailsOrderService } from "../../Services/Order/DetailsOrderService";

class DetailsOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const detailsOrderService = new DetailsOrderService();

    const detailsOrder = await detailsOrderService.execute({
      order_id,
    });
    return res.status(200).json(detailsOrder);
  }
}
export { DetailsOrderController };
