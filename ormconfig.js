require('dotenv/config');

module.exports = {
    
    "type": "mysql",
    "host": process.env.DB_H0ST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "entities": ["./dist/src/entities/*.js"],
    "migrations": ["./dist/src/database/migrations/**.js"],
    "cli": {
        "migrationsDir": "./dist/src/database/migrations"
    }
};