import prismaClient from "../../Prisma";
interface DeleteRequest {
  order_id: string;
}

class DeleteOrderService {
  async execute({ order_id }: DeleteRequest) {
    const deleteOrder = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });
    return { OK: true };
  }
}
export { DeleteOrderService };
