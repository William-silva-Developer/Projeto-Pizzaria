import prismaClient from "../../../Prisma";

class DatailsUserService {
  async excute(user_id: string) {
    const user = await prismaClient.users.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { DatailsUserService };
