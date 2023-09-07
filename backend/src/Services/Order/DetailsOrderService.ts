import prismaClient from "../../Prisma";

interface DetailsOrderRequest {
  order_id: string;
}
class DetailsOrderService {
  async execute({ order_id }: DetailsOrderRequest) {
    const detailsOrder = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        order: true,
        product: true,
      },
    });
    return detailsOrder;
  }
}
export { DetailsOrderService };
