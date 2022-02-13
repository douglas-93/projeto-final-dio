import sqlite3 from "sqlite3";

const db = new sqlite3.Database("C:\\Users\\dougl\\Projetos\\projeto-final-dio\\backend\\src\\database\\database.db", sqlite3.OPEN_READWRITE,
    (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log("Connected to database.");
        }
    }
);

export default db;
