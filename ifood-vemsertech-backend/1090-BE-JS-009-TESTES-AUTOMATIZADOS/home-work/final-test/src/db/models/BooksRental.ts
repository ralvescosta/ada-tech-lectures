import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import { BooksRental } from "../../controllers/models";

class BooksRentalModel extends Model<BooksRental, Optional<BooksRental, 'book' | 'user'>> {}

BooksRentalModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    book_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rented_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    rental_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, 
  {
    tableName: "books_rental",
    sequelize: sequelize,
  }
)

export { BooksRentalModel };