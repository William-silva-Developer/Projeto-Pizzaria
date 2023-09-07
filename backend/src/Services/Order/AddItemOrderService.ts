import prismaClient from "../../Prisma";

interface AddItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemOrderService {
  async execute({ amount, order_id, product_id }: AddItemRequest) {
    const addItem = await prismaClient.item.create({
      data: { amount: amount, order_id: order_id, product_id: product_id },
      select: {
        id: true,
        order_id: true,
        product_id: true,
      },
    });

    return addItem;
  }
}

export { AddItemOrderService };
