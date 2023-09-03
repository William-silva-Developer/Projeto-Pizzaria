import { Response, Request, response } from "express";
import prismaClient from "../../../Prisma";
import { hash } from "bcryptjs";

interface UserRequestParams {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async createUser({ email, name, password }: UserRequestParams) {
    if (!email) {
      throw new Error("Please enter a valid email");
    }

    const userAlreadyExists = await prismaClient.users.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    //CRIPTOGRAFANDO A SENHA
    const passwordHash = await hash(password, 8);
    //SALVANDO NO BD
    const user = await prismaClient.users.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
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

export { CreateUserService };
