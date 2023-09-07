import prismaClient from "../../Prisma";

interface Category {
  nameCategory: string;
}

class CategoryService {
  async execute({ nameCategory }: Category) {
    if (nameCategory === "") {
      throw new Error("Invalid category");
    }

    const category = await prismaClient.category.create({
      data: {
        name: nameCategory,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CategoryService };
