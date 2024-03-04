const dotEnv = require("dotenv")

dotEnv.config({ path: ".env" })

const DB_DIALECT = process.env.DB_DIALECT
const DB_STORAGE = process.env.DB_STORAGE

module.exports = {
  dialect: DB_DIALECT,
  storage: DB_STORAGE,
  logging: console.log,
}