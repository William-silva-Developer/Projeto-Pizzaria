import express, { Response, Request, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { router } from "./routes";
import path from "path";

const app = express();
app.use(express.json());

app.use(cors());
app.use(router);

app.use("/files", express.static(path.resolve(__dirname, "..", "temp")));

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return res.status(400).json({
      error: error.message,
    });
  }

  return res.status(500).json({
    error: "Error",
    message: "Internal Server Error",
  });
});
app.listen(3333, () => console.log("Online"));
