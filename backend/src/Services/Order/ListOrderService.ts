import prismaClient from "../../Prisma";

class ListOrderService {
  async execute() {
    const order = await prismaClient.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return order;
  }
}
export { ListOrderService };
