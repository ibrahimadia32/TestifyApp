const express = require("express");
const profilController = require("../controllers/profilController");

const router = express.Router();

// Route pour la création d'un profil
router.post("/create", profilController.createProfil);
router.post("/:id", profilController.getProfil);

module.exports = router;
