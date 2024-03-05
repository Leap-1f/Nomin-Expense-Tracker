import { sql } from "../../config/database.js";

export const getAllUsers = async (request, response) => {
  try {
    const data = await sql`SELECT * FROM users`;
    response.send(data);
  } catch (err) {
    console.log(err);
  }
};
