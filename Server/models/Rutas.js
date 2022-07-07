const Sequelize = require('sequelize');
const sequelize = require('../databases/sqlDataBase');

const Rutas = sequelize.define('Rutas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  provincia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  km: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  timestamps: false
});

module.exports = Rutas;
