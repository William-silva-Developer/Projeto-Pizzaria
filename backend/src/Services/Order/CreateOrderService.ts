import prismaClient from "../../Prisma";

interface OrderRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async execute({ name, table }: OrderRequest) {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
      },
      select: {
        id: true,
        table: true,
        name: true,
        items: true,
        draft: true,
        status: true,
      },
    });

    return order;
  }
}

export { CreateOrderService };
