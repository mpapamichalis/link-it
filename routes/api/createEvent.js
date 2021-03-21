const router = require("express").Router();
const eventController = require("../../controllers/EventController");

router.route("/createEvent").post(eventController.create)



module.exports = router;