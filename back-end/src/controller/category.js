import { sql } from "../../config/database.js";

export const getAllCategories = async (request, response) => {
  try {
    const data = await sql`SELECT * FROM category`;
    response.send(data);
  } catch (err) {
    console.log(err);
  }
};
export const postCategories = async (request, response) => {
  try {
    const { name, password, email, currencyType, amount } = request.body;
    const salt = bcryct.genSaltSync(1);
    const hashedPassword = await bcryct.hash(password, salt);
    const data = await sql`SELECT * FROM users`;
    const newUser =
      await sql`INSERT INTO users(email, name, password, currency_type, balance) VALUES(${email}, ${name}, ${hashedPassword}, ${currencyType}, ${amount}) RETURNING *`;
    data.push(newUser);
    response.send({ success: true, statusCode: 201 });
  } catch (err) {
    console.log(err, "hellooo");
  }
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
      amount INT NOT NULL)`;
    console.log(data);
    response.send(`users table is created`);
  } catch (err) {
    console.log(err);
  }
};
export const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    const data = await sql`SELECT * FROM users where email=${email}`;
    console.log(data, "data");
    if (data.length === 0) {
      response.send({
        message: "nodata",
        data: null,
      });
      return;
    }
    const isValid = await bcryct.compare(password, data[0].password);
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
