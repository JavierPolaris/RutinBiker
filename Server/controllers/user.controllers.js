/**
 * @author Javier García-Rojo
 */

/**
 * Llamamos a las librerias de mongoose y sql
 */

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const mongoose = require('mongoose');


const Sequelize = require('sequelize');
const bcrypt = require("bcrypt");
const fs = require("fs");
const User = require('../models/User');
const Usuario = require("../models/Usuario");
const Ruta = require("../models/Rutas");
const UsuariosRutas = require("../models/UsuariosRutas");
const Post = require("../models/Post");




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
            // console.log(comprobarUser);
            if (comprobarUser) {
                console.log("El usuario ya existe");
            }
            else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(contrasena, salt);
                const user = Usuario.create({
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





    login: async (req, res) => {
        loginEmail = req.body.email;
        passLog = req.body.password;

        // if (loginEmail == "admin@admin.com" && passLog == "Admin123*") {
        //     res.render("admin");
        // }
        // console.log(loginEmail);


        const comprobarUser = await Usuario.findOne({
            where: {
                email: loginEmail
            }
        });
        // console.log(comprobarUser.dataValues.longitud);
        if (comprobarUser) {
            console.log("El usuario existe");
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(passLog, salt);
            const comprobarPass = bcrypt.compareSync(passLog, hash);
            if (comprobarPass) {
                console.log("Contraseña correcta");
                // console.log(comprobarUser.dataValues);
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

        // console.log(posiciones);

        //Aqui añado la ruta al array de rutas

        rutas.push(posiciones);

        //Aqui guardo el array de rutas en un json

        let json_rutas = JSON.stringify(rutas);
        fs.writeFileSync('ruta.json', json_rutas);


    },

    historial: async (req, res) => {

        const idUser = req.body.logId;

        // console.log('estes es el id: ' + idUser);
        try {
            const historial = await UsuariosRutas.findAll({

                where: {
                    fk_id_usuario: idUser
                }

            });
            // console.log(historial);

            if (historial != "") {
                console.log("El usuario ha hecho rutas");
                let idArray = [];
                let rutasUser = [];
                historial.map(
                    (elemento) => {
                        idArray.push(elemento.dataValues.fk_id_ruta);
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

                // console.log(rutasUser);
                res.json({
                    message: true,
                    rutasUser
                });

            } else {
                console.log("El usuario no ha hecho rutas");
                res.json({
                    message: false
                });
            }


            // }
        } catch (error) {
            console.log("El usuario no ha hecho rutas");
            res.json({
                message: false
            });
        }



    },
    popular: async (req, res) => {

        try {
            const RutasPopulares = [];
            const userRuta = [];
            const RutasPopularesUSer = [];
            const rutas = await Ruta.findAll({
                order: [
                    ['id', 'DESC']
                ],
                limit: 5
            });
            console.log("Las rutas mas populares");
            // console.log(rutas);


            rutas.map(
                (elemento) => {
                    RutasPopulares.push(elemento.dataValues);
                }
            )
            for (let i = 0; i < RutasPopulares.length; i++) {
                const usuarioRuta = await UsuariosRutas.findOne({
                    where: {
                        fk_id_ruta: RutasPopulares[i].id
                    }
                });
                userRuta.push(usuarioRuta.dataValues);

            }
            //   console.log("Esto usuarios rutas "+userRuta);
            for (let i = 0; i < userRuta.length; i++) {
                const userRutaTrack = await Usuario.findOne({
                    where: {
                        id: userRuta[i].fk_id_usuario
                    }
                });
                RutasPopularesUSer.push(userRutaTrack.dataValues);
            }
            const PopularUser = [];
            for (let i = 0; i < RutasPopulares.length; i++) {
                // console.log(RutasPopulares[i])
                // console.log(RutasPopularesUSer[i]);
                data = {
                    nombreRuta: RutasPopulares[i].nombre,
                    provincia: RutasPopulares[i].provincia,
                    km: RutasPopulares[i].km,
                    nombreUser: RutasPopularesUSer[i].nombre,
                    urlImg: RutasPopularesUSer[i].urlImg,
                }
                PopularUser.push(data);

            }

            // console.log(PopularUser);

            // console.log(("gilipollez "+ gilipollez));
            res.json({
                message: true,
                PopularUser
                // rutas,
                // RutasPopularesUSer
            });
        } catch (error) {
            console.log("No hay rutas");
            res.json({
                message: false
            });
        }


    },
    crearU: async (req, res) => {
        //    console.log(req.body);

        const user = await Usuario.findAll({})
        
        res.json({
            message: true,
            user
        });



    },
    insertPost: async (req, res) => {
        const userMail = req.body.usermail;
        const post = req.body.post;
        
        const urlImg = req.body.urlImg;
        const nombre = req.body.logNombre;
        const userUrlImg = req.body.userUrlImg;
        // console.log(urlImg);

        try {
            if(urlImg == undefined){
                console.log("no hay imagen");
            const post2 = await new Post({
                email: userMail,
                message: post,
                heart: 0,
                like: 0,
                userName: nombre,
                userUrlImg: userUrlImg,
                

            }).save();
            res.json({
                message: true,
                post2
            });
            }else{
                console.log("si hay imagen");
                const post2 = await new Post({
                    email: userMail,
                    message: post,
                    urlImg: urlImg,
                    heart: 0,
                    like: 0,
                    userName: nombre,
                    userUrlImg: userUrlImg

                }).save();
                res.json({
                    message: true,
                    post2
                });
            }
        }
        catch (error) {
            console.log(error);
            res.json({
                message: false
            });
        }



    },
    insrtComentario: async (req, res) => {
        const { id, comentario,userName,userUrlImg } = req.body;
        
        const parseo = await Post.findByIdAndUpdate(id, {
            $push: {
                comentarios: {
                    comentario: comentario,
                    userName: userName,
                    userUrlImg: userUrlImg
                }
            }
        });
        res.json({
            message: true,
            parseo
        });



    },
    searchPost: async (req, res) => {
        const userMail = req.body.usermail;
        // console.log("Este es el usuario que envio " + userMail);

        const posteo = await Post.find({ email: userMail }).sort({ createdAt: -1 });;




        // console.log("esta en la busqueda "+posteo);
        if (posteo != "") {
            console.log("El usuario ha hecho post");
            res.json({
                message: true,
                posteo
            });
        } else {
            console.log("El usuario no ha hecho post");
            res.json({
                message: false
            });

        }


    },
    searchPostFan: async (req, res) => {
        const id = req.body.id;
        // console.log("Este es el usuario que envio " + userMail);
        const user = await Usuario.findOne({
            where: {
                id: id
            }
        });
      
        const emailUser = user.email;
        const posteo = await Post.find({ email: emailUser }).sort({ createdAt: -1 });;


     

        // console.log("esta en la busqueda "+posteo);
        if (posteo != "") {
            console.log("El usuario ha hecho post");
            res.json({
                message: true,
                posteo
            });
        } else {
            console.log("El usuario no ha hecho post");
            res.json({
                message: false
            });

        }


    },
    searchPostComu: async (req, res) => {


        try {


            const posteo = await Post.find({}).sort({ createdAt: -1 });

            res.json({
                message: true,
                posteo
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                message: false
            });
        }

    },
    like: async (req, res) => {
   
        const { id, like } = req.body;

      

        try {
            const posteo = await Post.find({ _id: id });

        

            const posteo2 = await Post.findByIdAndUpdate(id, {
                like: posteo[0].like + 1,
            });

            res.json({
                message: true,
                posteo2
            });

        }
        catch (error) {
            console.log(error);
            res.json({
                message: false
            });

        }



    },
    love: async (req, res) => {
        // console.log("Body 371 " + req.body.like)
        const { id } = req.body;

        try {
            const posteo = await Post.find({ _id: id });
            const posteo2 = await Post.findByIdAndUpdate(id, {
                heart: posteo[0].heart + 1,
            });
            res.json({
                message: true,
                posteo2
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                message: false
            });

        }



    },

    addImg: async (req, res) => {
        const { usermail, urlImg } = req.body;

        // console.log("Este es el usuario "+usermail);
        try {
            const user = await Usuario.findOne({
                where: {
                    email: usermail
                }
            });
            user.urlImg = urlImg;
            await user.save();
            res.json({
                message: true,
                user
            });
        }


        catch (error) {
            console.log(error);
            res.json({
                message: false
            });
        }

    },
    userFanpage: async (req, res) => {
        const idUser = req.body.idUser;
        console.log(idUser);
 
            const user = await Usuario.findOne({
                where: {
                    id: idUser
                }
            });
            console.log(user);
            res.json({
                message: true,
                user
            });
    },
    searchUser: async (req, res) => {
        const { usermail } = req.body;
       
       
            const user = await Usuario.findOne({
                where: {
                    email: usermail
                }
            });
            console.log(user);
            res.json({
                message: true,
                user
            });
        

    }
};

module.exports = user;