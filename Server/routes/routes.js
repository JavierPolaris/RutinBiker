const router = require("express").Router();
const pages = require("../controllers/pages.controllers")
const user = require("../controllers/user.controllers")


//Rutas de inicio
// router.get("/",pages.home);

router.post("/registro",user.saveDataForm);
router.post("/login", user.login); 
router.post("/RegRute", user.regRute); 
router.post("/historial", user.historial); 


module.exports = router;