import { sql } from "../../config/database.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (request, response) => {
  try {
    const data = await sql`SELECT * FROM users`;
    response.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const postUser = async (request, response) => {
  const { name, password, email, currency_type, balance } = request.body;

  try {
    const result =
      await sql`INSERT INTO users(name, email, password, currency_type, balance ) VALUES(${name}, ${email}, ${password}, ${currency_type}, ${balance}) RETURNING *`;
    response.send(result);
  } catch (err) {
    console.error(err);
    response.status(400).json({ message: "Failed to add user" });
  }
  const salt = bcrypt.genSaltSync(1);
  const hashedPassword = await bcrypt.hash(password, salt);
  const users = await sql`SELECT * FROM users`;
  users.push({ name: name, password: hashedPassword });
  console.log(users);
  // response.send("User created succesfully");
};

export const createTable = async (request, response) => {
  try {
    const data =
      await sql`CREATE TABLE users(id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
      email VARCHAR(50) UNIQUE NOT NULL, 
      name VARCHAR(50) NOT NULL, 
      password VARCHAR(255) NOT NULL, 
      avatar_img TEXT, 
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
      currency_type TEXT DEFAULT 'MNT',
      balance INT NOT NULL)`;
    console.log(data);
    response.send(`users table is created`);
  } catch (err) {
    console.log(err);
  }
};
export const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const data = await sql`SELECT * FROM users WHERE email=${email}`;
    console.log(data, "data");
    if (data.length === 0) {
      response.send({
        message: "nodata",
        data: null,
      });
      return;
    }
    const isValid = await bcrypt.compare(password, data[0].password);
    if (isValid) {
      response.send({
        success: true,
        statusCode: 200,
        user: { userId: data.id, email: data.email, password: data.password },
      });
    } else {
      response.send({
        message: "failed",
        data: null,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
// export const signin = async (request, response) => {
//   try {
//     const { email } = request.body;
//     const data = await sql`SELECT * FROM users where email=${email}`;
//     console.log(data);
//     if (data.length === 1) {
//       response.send({
//         message: "This email is registered.",
//       });
//     } else if (data.length === 0) {
//       response.send({ success: true, statusCode: 200 });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
