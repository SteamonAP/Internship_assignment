import db from '../config/db.js';

const createSchoolsTable = async () =>{
    const sql = `CREATE TABLE IF NOT EXISTS schools (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            latitude FLOAT NOT NULL,
            longitude FLOAT NOT NULL
        );
    `;
    try {
        await db.execute(sql);
        console.log("School table was created successfully");
    } catch (error) {
        console.error("Error creating school table: ", error);
        
    }
};

createSchoolsTable();