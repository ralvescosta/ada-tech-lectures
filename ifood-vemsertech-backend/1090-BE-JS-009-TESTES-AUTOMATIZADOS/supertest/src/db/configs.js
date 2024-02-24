const dotEnv = require("dotenv")

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'

dotEnv.config({ path: envFile })

const DB_HOST = process.env.DB_HOST 
const DB_PORT = process.env.DB_PORT ?? Number(process.env.DB_PORT) 
const DB_USERNAME = process.env.DB_USERNAME 
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DIALECT = process.env.DB_DIALECT
const DB_DATABASE = process.env.DB_DATABASE
const DB_SEQUELIZE_LOG = process.env.DB_SEQUELIZE_LOG === "true"

module.exports = {
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  dialect: DB_DIALECT,
  database: DB_DATABASE,
  storage: DB_DIALECT === 'sqlite' ? DB_DATABASE : undefined, 
  logging: DB_SEQUELIZE_LOG ? console.log : false,
}
