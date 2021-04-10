require('dotenv/config');

module.exports = {
    
    "type": "mysql",
    "host": process.env.DB_H0ST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "entities": ["./src/entities/*.ts"],
    "migrations": ["./src/database/migrations/**.ts"],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
};