/**
 * @author Javier García-Rojo
 */

/**
 * Llamamos a las librerias de mongoose y sql
 */

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const mongoose = require("mongoose");
const connection = require("../database/sqlDataBase");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const fs = require("fs");


const user = {

    saveDataForm: (req, res) => {
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
            let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';
            let query3 = mysql.format(selectQuery, [
                "Usuarios",
                "email",
                email,
            ]);
            console.log(email);
            // Aqui comprobamos si el email ya existe en la base de datos
            if (connection) {
                connection.query(query3, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (result.length > 0) {
                            console.log("ya existe");

                        } else {
                            bcrypt.hash(contrasena, 10, (err, palabraSecretaEncriptada) => {
                                if (err) {
                                    console.log("Error hasheando:", err);
                                } else {

                                    console.log("Y hasheada es: " + palabraSecretaEncriptada);
                                    palabraEncriptada = palabraSecretaEncriptada;
                                    // Aqui introducimos los datos en la base de datos cuando no existe el email
                                    let query = "INSERT INTO Usuarios (nombre, email, contrasena, about, urlImg, longitud, latitud, modelo, anio) VALUES (?,?,?,?,?,?,?,?,?)";

                                    let query2 = mysql.format(query, [
                                        nombre,
                                        email,
                                        palabraEncriptada,
                                        about,
                                        urlImg,
                                        longitud,
                                        latitud,
                                        bike,
                                        anio,

                                    ]);
                                    console.log(query2)


                                    connection.query(query2, (err, result) => {
                                        if (err) {
                                            console.log(err);
                                        } else {

                                            console.log("insertado");

                                        }

                                    }
                                    );
                                }
                            })
                        }
                    }
                })
            }
        }
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
    },





    login: (req, res) => {
        loginEmail = req.body.email;
        passLog = req.body.password;

        // if (loginEmail == "admin@admin.com" && passLog == "Admin123*") {
        //     res.render("admin");
        // }
        console.log(loginEmail);

        let nameCorrect = `SELECT email,contrasena FROM Usuarios where email = '${loginEmail}'`;
        // Aqui comprobamos si el email existe en la base de datos
        connection.query(nameCorrect, (err, rows) => {
            if (err) throw err;

            console.log('Usuario: \n', rows);
            bcrypt.compare(passLog, rows[0].contrasena).then(function (result) {

                if (result && rows[0].email == loginEmail) {
                    console.log("Usuario correcto");
                    let selectQuery = "SELECT * FROM ?? WHERE ?? = ?";

                    let query3 = mysql.format(selectQuery, [
                        "Usuarios",
                        "email",
                        loginEmail,
                    ]);
                    console.log("selectQuery" + selectQuery);
                    console.log("query3" + query3);
                    connection.query(query3, (err, data) => {
                        if (err) throw err;
                        console.log(data);
                        id = data[0].id;
                        nombre = data[0].nombre;
                        email = data[0].email;
                        urlImg = data[0].urlImg;
                        contrasena = data[0].contrasena;
                        about = data[0].about;
                        longitud = data[0].longitud;
                        latitud = data[0].latitud;
                        bike = data[0].modelo;
                        anio = data[0].anio;
                    

                        
                    });

                } else {
                    console.log("contraseña incorrecta");
                }

            });
        })
        
        res.json({
            message: true,
            email,
            nombre,
            about,
            urlImg,
            longitud,
            latitud,
            bike,
            anio,
            id
        })

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

    historial: (req, res) => {
       const idUser =  req.body.logId;
        console.log('estes es el id: ' + idUser);
      let selectQuery = "SELECT * FROM ?? WHERE ?? = ?";
        let query3 = mysql.format(selectQuery, [
            "Usuarios_Rutas",
            "fk_id_usuario",
            idUser
        ]);
        console.log(query3);
        connection.query(query3, (err, data) => {   
            if (err) throw err;
            console.log(data[0].fk_id_ruta);
            console.log(data[0].fecha);
            const fecha = data[0].fecha;
            const idRuta = data[0].fk_id_ruta;
            let selectQueryRutas = "SELECT * FROM ?? WHERE ?? = ?";
            let queryRuta = mysql.format(selectQueryRutas, [
                "Rutas",
                "id",
                idRuta,
            ]);
            connection.query(queryRuta, (err, data) => {
                if (err) throw err;
                console.log(data);
                res.json({
                    message: true,
                    nombre: data[0].nombre,
                    provincia: data[0].provincia,
                    km: data[0].km,
                    fecha,
                });
            }
            );
       
        }
        );

           







    }
}

module.exports = user;