import { Router } from "express";

import {
  getAllUsers,
  postUser,
  createTable,
  login,
} from "../controller/user.js";

const users = Router();

users.route("/signup").get(getAllUsers).post(postUser);
users.route("/login").post(login);
users.route("/user").post(createTable);

export { users };
