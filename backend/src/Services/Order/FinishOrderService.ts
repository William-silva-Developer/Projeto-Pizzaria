import prismaClient from "../../Prisma";

interface FinishOrderRequest {
  order_id: string;
}

class FinishOrderService {
  async execute({ order_id }: FinishOrderRequest) {
    const finishOrder = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });
    return finishOrder;
  }
}
export { FinishOrderService };
