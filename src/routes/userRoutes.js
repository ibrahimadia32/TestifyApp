const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Route pour la création d'un utilisateur
router.post("/create", userController.createUser);

// Route pour la récupération de tous les utilisateurs
router.get("/all", userController.getAllUsers);

module.exports = router;
