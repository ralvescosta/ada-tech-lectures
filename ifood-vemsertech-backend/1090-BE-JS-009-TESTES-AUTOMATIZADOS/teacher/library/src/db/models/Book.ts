import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize";

const BookModel = sequelize.define('books', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    editor: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
);

export { BookModel };