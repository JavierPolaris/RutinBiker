const Sequelize = require('sequelize');
const sequelize = require('../databases/sqlDataBase');

const UsuariosRutas = sequelize.define('Usuarios_Rutas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fecha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_id_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_id_ruta: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  timestamps: false
});
module.exports = UsuariosRutas;
