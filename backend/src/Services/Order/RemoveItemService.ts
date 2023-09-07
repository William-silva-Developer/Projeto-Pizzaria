import prismaClient from "../../Prisma";

interface RemoveItemRequest {
  item_id: string;
}
class RemoveItemService {
  async execute({ item_id }: RemoveItemRequest) {
    await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });
    return { OK: true };
  }
}

export { RemoveItemService };
