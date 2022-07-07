/**
 * Conexion con la base de datos MySql
 
 */
const { Sequelize } = require('sequelize'); 

 const sequelize = new Sequelize("bikeRelacional", 'root', 'root1234', {
   host: "localhost",
   dialect: "mysql",
   port: 3306,
   difine: {
      timestamps: false,
 },
 logging: false,
});
 
 sequelize
 .authenticate()
 .then(() => {
     console.log('Conectado a MySQL');
 })
 .catch(err => {
     console.log('No conectado a MySQL: '+ err)
 });
 
 module.exports = sequelize  