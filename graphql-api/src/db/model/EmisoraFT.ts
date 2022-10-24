export default (sequelize, DataTypes) => {
    return sequelize.define( 'EmisoraFT', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },

        keyEmisora: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nameEmisora: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stockExchage: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
          // Other model options go here
    });
};
