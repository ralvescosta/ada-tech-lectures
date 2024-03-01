import { Car } from '../../models/cars'
import Sequelize, { Model } from 'sequelize'
import { sequelize } from '../sequelize'

export class CarsModel extends Model<Car> {}

CarsModel.init(
  {
    id: {
      type: Sequelize.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    model: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    year: {
      type: Sequelize.DATE,
      allowNull: true
    }
  },
  {
    tableName: 'cars',
    sequelize
  }
)