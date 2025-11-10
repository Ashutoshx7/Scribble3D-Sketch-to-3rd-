import { NextFunction, Request, Response } from "express";
import { JWT_SECRET } from "./config";
import jwt from "jsonwebtoken";

export function middleware(req: Request, res: Response, next: NextFunction) {
  const header = req.headers["authorization"] ?? "";
  const token = header.split(" ")[1];

  if (token) {
    const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
    if (decoded) {
      (req as any).userId = decoded.userId;
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
