import { Association, DataTypes, HasManyGetAssociationsMixin, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";
import { BooksRental, User } from "../../controllers/models";
import { UsersModel } from "./Users";
import { BooksModel } from "./Books";

class BooksRentalModel extends Model<BooksRental, Optional<BooksRental, 'book' | 'user'>> {
  public getBook!: HasManyGetAssociationsMixin<BooksModel>
  public booksRentalModelBooks!: BooksModel

  public getUser!: HasManyGetAssociationsMixin<UsersModel>
  public booksRentalModelUsers!: UsersModel

   public static associations: {
    booksRentalModelBooks: Association<BooksModel>,
    booksRentalModelUsers: Association<UsersModel>
  }
}

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

BooksRentalModel.belongsTo(BooksModel, {
  foreignKey: 'book_id',
  targetKey: "id",
  as: 'booksRentalModelBooks'
})

BooksRentalModel.belongsTo(UsersModel, {
  foreignKey: 'user_id',
  targetKey: "id",
  as: 'booksRentalModelUsers'
})

export { BooksRentalModel };