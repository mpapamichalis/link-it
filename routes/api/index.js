const router = require("express").Router();
const AuthRoutes = require('./users');

// Authentication routes
router.use("/auth", AuthRoutes);

module.exports = router;
