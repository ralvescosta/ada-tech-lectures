const dotEnv = require("dotenv")

const nodeEnv = process.env.NODE_ENV

dotEnv.config({ path: nodeEnv ? `.env.${nodeEnv}` : '.env' })

const DB_DIALECT = process.env.DB_DIALECT
const DB_STORAGE = process.env.DB_STORAGE
const DB_LOGS = process.env.DB_LOGS

module.exports = {
  dialect: DB_DIALECT,
  storage: DB_STORAGE,
  logging: DB_LOGS === 'true' ? console.log: undefined,
}