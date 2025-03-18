import db from "../config/db.js";

export const createSchool = async (name, address, latitude, longitude) => {
  const sql =
    "INSERT INTO schools (name , address, latitude, longitude) VALUES (?,?,?,?)";
  const [result] = await db.execute(sql, [name, address, latitude, longitude]);
  return result.insertId;
};

export const distanceSchool = async (latitude, longitude) => {
  const sql = `SELECT id,name,address,latitude,longitude,(6371 * acos(cos(radians(?)) * cos(radians(latitude))* cos(radians(longitude) - radians(?))+sin(radians(?)) * sin(radians(latitude)))) AS distance FROM schools ORDER BY distance;`;
  const [results] = await db.execute(sql,[latitude, longitude,latitude]);
  return results;
};
