const router = require("express").Router();
const userController = require("../../controllers/AuthController")

router.route("/login").post(userController.findOne)



// router.route("/register")


module.exports = router;