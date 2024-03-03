import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";
import { BooksRentalModel } from "./BooksRental";
import { Book } from "../../controllers/models";

class BooksModel extends Model<Book> {}

BooksModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publishing_company: {
      type: DataTypes.STRING,
      allowNull: false
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    authors: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    tableName: "books",
    sequelize: sequelize,
  }
)

export { BooksModel };