const router = require("express").Router();
const AuthRoutes = require('./users');

// Book routes
router.use("/auth", AuthRoutes);

module.exports = router;
