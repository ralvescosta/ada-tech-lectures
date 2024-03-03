import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";
import { BooksRentalModel } from "./BooksRental";
import { User } from "../../controllers/models";

class UsersModel extends Model<User> {}

UsersModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    tableName: "users",
    sequelize: sequelize,
  }
)

export { UsersModel };