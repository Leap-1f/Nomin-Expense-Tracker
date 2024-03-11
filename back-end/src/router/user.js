import { Router } from "express";

import { getAllUsers } from "../controller/user.js";

const user = Router();

user.route("/").get(getAllUsers);

user.route("/register")

export { user };
