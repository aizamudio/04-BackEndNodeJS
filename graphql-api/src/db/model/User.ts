import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize';
import { sequelize } from '..';

export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: number
    declare name: string
    declare lastname?: string;
    declare email: string;
    declare RFC: string;
    declare addressHome: string;
    declare password: string;
    declare isAdmin?: boolean;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  RFC: {
    type: DataTypes.STRING,
    allowNull: true,          //Despues de pruebas regresar a false
    unique: true
  },
  addressHome: {
    type: DataTypes.STRING,
    allowNull: true,          //Despues de pruebas regresar a false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,      //Despues de pruebas regresar a false
  }
}, {
  timestamps: true,
  sequelize: sequelize
})

