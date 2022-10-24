import { Sequelize, DataTypes } from 'sequelize';
import { logger } from '../logger';
import Book from './model/Book'
import UserFT from './model/UserFT';
import PortfolioFT from './model/PortfolioFT';
import EmisoraFT from './model/EmisoraFT';
import TickerFT from './model/TickerFT';
import PortTickerFT from './model/PortTickerFT';
//import User from './model/User';

// Instancia de sequelize (conexión a BD)
export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: msg => logger.debug(msg)
})

// Creación de modelos con la instancia recien creada
Book(sequelize, DataTypes)
UserFT(sequelize, DataTypes)
PortfolioFT(sequelize, DataTypes)
EmisoraFT(sequelize, DataTypes)
TickerFT(sequelize, DataTypes)
PortTickerFT(sequelize, DataTypes)
//User(sequelize, DataTypes)

if (process.env.NODE_ENV !== 'production') {
  // La definición de 'sync' sin parametros crea las tablas si no existen y no hace nada si ya están
  const syncBD = async () => await sequelize.sync()
  syncBD()
}

