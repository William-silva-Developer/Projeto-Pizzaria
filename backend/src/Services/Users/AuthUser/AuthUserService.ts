import { compare } from "bcryptjs";
import prismaClient from "../../../Prisma";
import { sign } from "jsonwebtoken";

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

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET_KEY,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return { id: user.id, email: user.email, name: user.name, token: token };
  }
}

export { AuthUserService };
