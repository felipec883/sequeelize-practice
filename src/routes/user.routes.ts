import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";

const route = Router();

route.post("/user", createUser);
export default route;
