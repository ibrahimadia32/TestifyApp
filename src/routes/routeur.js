const express = require("express");
const profilRoute = require("./profilRoutes");
const router = express.Router();

router.use("/profil", profilRoute);

module.exports = router;
