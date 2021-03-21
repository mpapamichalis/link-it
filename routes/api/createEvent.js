const router = require("express").Router();
const userController = require("../../controllers/AuthController")

router.route("/createEvent").post(userController.create)



module.exports = router;