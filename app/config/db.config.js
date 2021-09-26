const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  HOST: process.env.HOST,
  USER: process.env.DATABASE,
  PASSWORD: process.env.DATABASE_PASSWORD,
  DB: process.env.DATABASE_TABLE,
  dialect: "mysql",
  pool: {
    max: 100,
    min: 0,
    acquire: 300000,
    idle: 100000,
  },
};
