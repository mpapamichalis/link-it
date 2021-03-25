const router = require("express").Router();
const EventController = require("../../controllers/EventController");

// Matches with "/api/posts"
router
  .route("/")
  .get(EventController.findAll)
  .post(EventController.create);

// Matches with "/api/posts/:id"
router
  .route("/event/:id")
  .get(EventController.findById)
  //.put(EventController.update)
  //.delete(EventController.remove);

module.exports = router;
