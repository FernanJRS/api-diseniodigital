import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config()
if (process.env.DB_HOST === undefined){
}

// console.log({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// })

const db = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    namedPlaceholders: true, // Habilita el uso de marcadores de posición con nombre
    queueLimit: 0 // 0 = sin limites de conexiones en espera
}) // Método disponible desde la importación de mysql2/promise

export default db