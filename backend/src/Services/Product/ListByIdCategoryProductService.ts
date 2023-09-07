import prismaClient from "../../Prisma";

interface ParamsRequest {
  category_id: string;
}

class ListByIdCategoryProductService {
  async excute({ category_id }: ParamsRequest) {
    const productCategoryId = await prismaClient.product.findMany({
      where: {
        category_id: category_id,
      },
      select: {
        id: true,
        name: true,
        price: true,
        banner: true,
        description: true,
      },
    });

    return productCategoryId;
  }
}

export { ListByIdCategoryProductService };
