export default (sequelize, DataTypes) => {
    return sequelize.define( 'PortTickerFT', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },

        idPortfolio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        keyTicker: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
          // Other model options go here
    });
};
