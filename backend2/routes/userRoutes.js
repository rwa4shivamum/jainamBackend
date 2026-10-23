import { Router } from "express";
import { createUser, getUser } from "../controller/crudController.js";

export const userRoutes = Router()

userRoutes.post("/createUser", createUser);
userRoutes.get("/getUser", getUser);