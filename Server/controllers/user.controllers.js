/**
 * @author Javier García-Rojo
 */

/**
 * Llamamos a las librerias de mongoose y sql
 */

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";


const Sequelize = require('sequelize');
const bcrypt = require("bcrypt");
const fs = require("fs");

const Usuario = require("../models/Usuario");
const Ruta = require("../models/Rutas");
const UsuariosRutas = require("../models/UsuariosRutas");


const user = {

    saveDataForm: async (req, res) => {
        let nombre = req.body.username;
        let email = req.body.email;
        let urlImg = req.body.urlImg;
        let contrasena = req.body.password;
        let about = req.body.about;
        let longitud = req.body.longitud;
        let latitud = req.body.latitud;
        let bike = req.body.bike;
        let anio = req.body.anio;


        const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);
        const passExp = new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
        );
        /**
* Aqui comprobamos si los datos que introduce el usuario son correctos o no
* si lo son se introducen en la base de datos, y si no lo son le indicamos a el usuario que son
* incorrectos
*/

        if (
            !nameExp.test(nombre) ||
            !passExp.test(contrasena)


        ) {
            console.log("campos incorrectos");
        } else {
            // Aqui introducimos los datos en la base de datos
            const comprobarUser = await Usuario.findOne({
                where: {
                    email: email
                }

            });
            console.log(comprobarUser);
            if (comprobarUser) {
                console.log("El usuario ya existe");
            }
            else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(contrasena, salt);
              const user =  Usuario.create({
                    nombre: nombre,
                    email: email,
                    urlImg: urlImg,
                    contrasena: hash,
                    about: about,
                    longitud: longitud,
                    latitud: latitud,
                    modelo: bike,
                    anio: anio
                });
                console.log("Usuario creado");

                res.json({
                    message: true,
                    email,
                    nombre,
                    about,
                    urlImg,
                    longitud,
                    latitud,
                    bike,
                    anio
                })
            }
        }
    },





    login: async(req, res) => {
        loginEmail = req.body.email;
        passLog = req.body.password;

        // if (loginEmail == "admin@admin.com" && passLog == "Admin123*") {
        //     res.render("admin");
        // }
        console.log(loginEmail);


        const comprobarUser = await Usuario.findOne({
            where: {
                email: loginEmail
            }
        });
        console.log(comprobarUser.dataValues.longitud);
        if (comprobarUser) {
            console.log("El usuario existe");
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(passLog, salt);
            const comprobarPass = bcrypt.compareSync(passLog, hash);
            if (comprobarPass) {
                console.log("Contraseña correcta");
                console.log(comprobarUser.dataValues);
                res.json({
                    message: true,
                    id: comprobarUser.dataValues.id,
                    nombre: comprobarUser.dataValues.nombre,
                    email: comprobarUser.dataValues.email,
                    urlImg: comprobarUser.dataValues.urlImg,
                    about: comprobarUser.dataValues.about,
                    longitud: comprobarUser.dataValues.longitud,
                    latitud: comprobarUser.dataValues.latitud,
                    bike: comprobarUser.dataValues.modelo,
                    anio: comprobarUser.dataValues.anio
                });

            } else {
                console.log("contraseña incorrecta");
                res.json({
                    message: false
                });
            }

        };




    },
    regRute: (req, res) => {
        //Aqui me traigo del front las posiciones de la ruta

        var posiciones = req.body.posiciones;

        console.log(posiciones);

        //Aqui añado la ruta al array de rutas

        rutas.push(posiciones);

        //Aqui guardo el array de rutas en un json

        let json_rutas = JSON.stringify(rutas);
        fs.writeFileSync('ruta.json', json_rutas);


    },

    historial: async(req, res) => {

        const idUser = req.body.logId;

        // console.log('estes es el id: ' + idUser);
        try {
            const historial = await UsuariosRutas.findAll({
            
                where: {
                    fk_id_usuario: idUser
                }
                
            });
         
                
                console.log("El usuario ha hecho rutas");
    
                let idArray = [];
                let rutasUser = [];
                historial.map(
                  (elemento) => {
                     idArray.push (elemento.dataValues.fk_id_ruta);
                  }
                )
                 for (let i = 0; i < idArray.length; i++) {
                    const ruta = await Ruta.findOne({
                        where: {
                            id: idArray[i]
                        }
                    });
                   rutasUser.push(ruta.dataValues);
    
                   
    
                  
                 }
               
                console.log(rutasUser);
                res.json({
                    message: true,
                    rutasUser
                });
            // }
        } catch (error) {
            console.log("El usuario no ha hecho rutas");
            res.json({
                message: false
            });
        }
       
        

     },
     popular: async(req, res) => {

        try {
            const RutasPopulares = [];
            const rutas = await Ruta.findAll({
                order: [
                    ['id', 'DESC']
                ],
                limit: 5
            });
            console.log("Las rutas mas populares");
            console.log(rutas);

            RutasPopulares.push(rutas);
            
            res.json({
                message: true,
                rutas
            });
        } catch (error) {
            console.log("No hay rutas");
            res.json({
                message: false
            });
        }
       
    }
};

module.exports = user;