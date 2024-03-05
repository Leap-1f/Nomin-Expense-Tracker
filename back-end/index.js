import express from "express";
import { sql } from "./config/database.js";
import { user } from "./src/router/user.js";
import cors from "cors";

// import { user } from "./mock/users.js";

import { sql } from "./config/database.js";

// app.use("/users", user);

const port = 8080;
const app = express();
app.use(cors());

app.get("/users", async (request, response) => {
  const data = await sql`SELECT * FROM users`;
  console.log(data);
  response.send("Hello");
});

app.listen(port, () => {
  console.log(` http://localhost:${port}`);
});
