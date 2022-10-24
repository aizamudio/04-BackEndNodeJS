export default (sequelize, DataTypes) => {
    return sequelize.define( 'TickerFT', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        keyTicker: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nameTicker: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        keyEmisora: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
          // Other model options go here
        });
};
