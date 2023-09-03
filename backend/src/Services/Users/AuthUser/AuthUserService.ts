import { compare } from "bcryptjs";
import prismaClient from "../../../Prisma";

interface loginUserParams {
  email: string;
  password: string;
}

class AuthUserService {
  async loginUser({ email, password }: loginUserParams) {
    const user = await prismaClient.users.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("User/password not found");
    }

    const passwordNotExist = await compare(password, user.password);

    if (!passwordNotExist) {
      throw new Error("User/password not found");
    }

    return { OK: true };
  }
}

export { AuthUserService };
