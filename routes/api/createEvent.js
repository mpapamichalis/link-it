const router = require("express").Router();
const eventController = require("../../controllers/EventController");

router.route("/createEvent").post(eventController.create);
router.route("/createEvent").get(eventController.findAll);


module.exports = router;