import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

const PersonModel = sequelize.define('people', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_user: {
      type: DataTypes.STRING,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, 
  {
    timestamps: false
  }
);

export { PersonModel };