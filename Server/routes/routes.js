const router = require("express").Router();
const pages = require("../controllers/pages.controllers")
const user = require("../controllers/user.controllers")


//Rutas de inicio
// router.get("/",pages.home);

router.post("/registro",user.saveDataForm);
router.post("/login", user.login); 
router.post("/RegRute", user.regRute); 
router.post("/historial", user.historial); 
router.get("/popular", user.popular); 
router.post("/crearU", user.crearU);
router.post("/insertPost", user.insertPost);
router.post("/insrtComentario", user.insrtComentario);
router.post("/searchPost", user.searchPost);
router.post("/searchPostFan", user.searchPostFan);
router.post("/searchPostComu", user.searchPostComu);
router.post("/like", user.like);
router.post("/love", user.love);
router.post("/addImg", user.addImg);
router.post("/userFanpage", user.userFanpage);
router.post("/searchUser", user.searchUser);



module.exports = router;