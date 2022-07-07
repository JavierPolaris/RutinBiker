const Sequelize = require('sequelize');
const sequelize = require('../databases/sqlDataBase');



const Usuario = sequelize.define('Usuarios', {
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
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  urlImg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contrasena: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  about: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  longitud: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  latitud: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  modelo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  anio: {
    type: Sequelize.STRING,
    allowNull: false,
  }
 
}, {
  timestamps: false
});
module.exports = Usuario;
