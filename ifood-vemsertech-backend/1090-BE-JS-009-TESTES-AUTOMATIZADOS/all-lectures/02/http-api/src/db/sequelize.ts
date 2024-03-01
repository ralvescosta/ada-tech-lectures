import { Sequelize } from 'sequelize'
import sequelizeConfig from './config'

export const sequelize = new Sequelize(
  {
    ...sequelizeConfig as any,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      freezeTableName: true,
      paranoid: true,
    }
  }
)

// deleted_at = 
// where deleted_at is null
// Model.delete()