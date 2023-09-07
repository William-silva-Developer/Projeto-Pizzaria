import prismaClient from "../../Prisma";

interface ParamsProduct {
  name: string;
  description: string;
  price: string;
  banner: string;
  category_id: string;
}

class ProductService {
  async execute({
    name,
    description,
    price,
    banner,
    category_id,
  }: ParamsProduct) {
    const product = await prismaClient.product.create({
      data: {
        name: name,
        description: description,
        price: price,
        banner: banner,
        category_id: category_id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        banner: true,
        category_id: true,
      },
    });

    return product;
  }
}

export { ProductService };
