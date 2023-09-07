import { Request, Response } from "express";
import { RemoveItemService } from "../../Services/Order/RemoveItemService";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    const removeItemService = new RemoveItemService();

    const itemRemoved = await removeItemService.execute({
      item_id,
    });

    return res.status(200).json(itemRemoved);
  }
}
export { RemoveItemController };
