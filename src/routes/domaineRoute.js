const express = require("express");
const domaineController = require("../controllers/domaineController");

const router = express.Router();

// Route pour la création d'un domaine
router.post("/create", domaineController.createDomaine);

// Route pour la récupération de tous les domaines
router.get("/all", domaineController.getAllDomaines);

module.exports = router;
