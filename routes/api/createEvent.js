const router = require("express").Router();
const eventController = require("../../controllers/EventController");

router.route("/createEvent").post(eventController.create);
router.route("/createEvent").get(eventController.findAll);
router
  .route("/")
  .get(eventController.findAll)
  .post(eventController.create);


router
  .route("/:id")
  .get(eventController.findById)

module.exports = router;