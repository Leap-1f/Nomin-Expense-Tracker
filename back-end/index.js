import express from "express";
import { users} from "./src/router/user.js";
import cors from "cors";

// import { user } from "./mock/users.js";

// import { sql } from "./config/database.js";

// let users = [];

const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", users);

// app.get("/", (request, response) => {
//   response.send("huselt irlee");
// });

// app.get("/users", async (request, response) => {
//   const data = await sql`SELECT * FROM users`;
//   console.log(data);
//   response.send("Hello");
// });

// app.post("/", async (request, response) => {
//   const { name, email, password } = request.body;

//   console.log(name, email, password);
//   try {
//     const result =
//       await sql`INSERT INTO users(name,email,password) VALUES(${name},${email},${password}) RETURNING *`;
//     response.send(result);
//   } catch (err) {
//     console.error(err);
//     response.status(200).json({ message: "Failed to add user" });
//   }
// const salt = bcrypt.genSaltSync(1);
// const hashedPassword = await bcrypt.hash(password, salt);
// users.push({ name: name, password: hashedPassword });
// console.log(users);
// response.send("User created succesfully");
// });
// app.get("/", async (request, response) => {
//   response.send("User test succesfully");
// });

// app.post("/login", async (request, response) => {
//   const { name, password } = request.body;
//   const filteredUser = users.filter((user) => user.name === name);
//   const isValid = await bcrypt.compare(password, filteredUser[0].password);

//   if (isValid) {
//     response.send("login successfully");
//   }
//   response.send("password and username is not valid");
// });

app.listen(port, () => {
  console.log(` http://localhost:${port}`);
});
