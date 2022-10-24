export default (sequelize, DataTypes) => {
    return sequelize.define( 'PortfolioFT', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPortfolio: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        rfcUser: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descriptionPFT: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        // Other model options go here
    });
};