import { Response, Request, NextFunction } from "express";
import { RequestHandler } from "express";
import { User } from "../models/user.js";

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newUser = await User.create({
      name: "Abu",
      password: "abu",
      role: "cristi",
    });

    res.status(200).json({ newUser });
  } catch (error) {
    res.status(500).json(error);
  }
}
