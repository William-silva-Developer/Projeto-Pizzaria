import prismaClient from "../../Prisma";

interface SendOrderRequest {
  order_id: string;
}
class SendOrderService {
  async execute({ order_id }: SendOrderRequest) {
    const sendOrder = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        draft: false,
      },
      select: {
        id: true,
        name: true,
        draft: true,
        status: true,
        table: true,
      },
    });
    return sendOrder;
  }
}
export { SendOrderService };
