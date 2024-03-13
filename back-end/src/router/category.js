import { Router } from "express";

import {
  getAllUsers,
  postUser,
  createTable,
  login,
} from "../controller/user.js";

const user = Router();

user.route("/signup").get(getAllUsers).post(postUser);
user.route("/login").post(login);
user.route("/user").post(createTable);

export { user };
