import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: "Not Authentication" }).end;
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET_KEY) as Payload;
    console.log("first: ", sub);
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Not Authentication" }).end;
  }
}
