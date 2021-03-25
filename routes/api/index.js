const router = require("express").Router();
const AuthRoutes = require('./users');
const EventRoute = require('./createEvent')

// Authentication routes
router.use("/auth", AuthRoutes);
router.use("/event", EventRoute)


module.exports = router;
