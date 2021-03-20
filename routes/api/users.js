const router = require("express").Router();
const userController = require("../../controllers/AuthController")

//routes to login controller to authenticate user
router.route("/login").post(userController.findOne)

//routes to register the user to create a new account
router.route("/register").post(userController.create)


module.exports = router;