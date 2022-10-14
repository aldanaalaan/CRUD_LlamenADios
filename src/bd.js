// Importaciones
import { createPool } from "mysql2/promise";
import { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } from "./config.js";

// Datos de conexion
const connData = {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
};

// Exportar conexion
export const conn = createPool(connData);
