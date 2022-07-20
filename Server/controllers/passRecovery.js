const Usuario = require("../models/Usuario");
const jwt = require("jsonwebtoken");
const sendMail = require("../email")
const encrypt = require("bcrypt");



const passRecovery = {

    confirmedUser: async (req, res, next) => {
        const SECRET = "Milikituli"
        let email = req.body.email;

        let result = await Usuario.findOne({
            where: { email: email },
          });

        if (result != null) {
            console.log("el usuario existe")
            const payload = {
                email: email,


            };

            const token = jwt.sign(payload, SECRET, { expiresIn: "45m" });

            const link = `<a href="http://localhost:3000/pwrecoverReset/${email}/${token}">Cambiar contraseña</a>`;
            //console.log(link);
            sendMail("rutinBiker@gmail.com", `${email}`, "Recuperacion de contraseña", `${link}`)

            res.json({
              message: "Mira tu correo electronico",
            });
        } else {
          res.json({
            message: "Usuario no registrado",
          });
            console.log('El usuario no existe');
        }


    },



    checkUserPost: async (req, res) => {
        const { email, contrasena, token } = req.body;
        const SECRET = "Milikituli"

        let usuario = await Usuario.findOne({
            where: { email: email },
          });
         console.log(usuario.id)
          const salt = encrypt.genSaltSync(10);
          const passwordHash = encrypt.hashSync(contrasena, salt);
          //comprobar que el email que viene del enlace de recuperacion, coincide con el de la base de datos
          if (usuario.email == email) {
            console.log("el email coincide")

            try {
              const comprobar = jwt.verify(token, SECRET);
              console.log("confirmed-user");
  
  
              const cambioContrasena = await Usuario.update({ contrasena: passwordHash }, {
                  where: { id: usuario.id },
                });
                sendMail("formula1fantasytb@gmail.com", `${email}`, "Cambio Contraseña", "Tu contraseña se ha cambiado con exito")
                res.json({
                  message: "Cambio realizado con exito",
                });
  
          } catch (error) {
              console.log(error)
              //res.send("No se puede confirmar el usuario, token invalido");
              res.json({
                message: "No se puede confirmar el usuario,o token invalido",
              });
              console.log("No se puede confirmar el usuario, token invalido")
          }




          } else {
            console.log("el email no coincide")



            res.json({
              message: "No se puede confirmar el usuario,o token invalido",
            });
          }
        


    },

    confirmUserGet: async (req, res) => {
        const { email, token } = req.params;
        //console.log(token)
        //const recuperar = `<a href="http://localhost:3000</a>`
        let result = await Usuario.findOne({
            where: { email: email },
          });

          //comprobar que el email que viene del enlace de recuperacion, coincide con el de la base de datos
          if (result.email == email) {
            console.log("el email coincide")
          } else {
            console.log("el email no coincide")
          }
        try {
            const comprobar = jwt.verify(token, SECRET);
            console.log("confirmed-user");
            res.json(window.location.assign("/pwrecoverReset"),{email: email} )

            //res.render( `${recuperar}` )
        } catch (error) {
            console.log(error)
            //res.send("No se puede confirmar el usuario, token invalido");
            console.log("No se puede confirmar el usuario, token invalido")
        }
    },





}

module.exports = passRecovery;