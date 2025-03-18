import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();


const  db = await  mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

console.log("Connected to MySQL DB");

export default db;


