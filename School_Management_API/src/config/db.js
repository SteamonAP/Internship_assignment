import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
import logger from './logger.js';


const  db = await  mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 4000,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    ssl: {
        minVersion: 'TLSv1.2',
      },
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
});


logger.info("Connected to MySQL DB");

export default db;


