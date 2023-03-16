const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("type", {
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          },
          name:{
            type: DataTypes.STRING(25),
            allowNull: false,
            unique: true
          }
    }, {
      timestamps: false
    })
}