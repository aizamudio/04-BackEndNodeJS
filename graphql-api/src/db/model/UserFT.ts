export default (sequelize, DataTypes) => {
    return sequelize.define( 'UserFT', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        RFC: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        addressHome: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    }, {
        // Other model options go here
    });
};