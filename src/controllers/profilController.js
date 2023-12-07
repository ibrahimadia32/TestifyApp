const Profil = require("../models/profilModels");

const createProfil = async (req, res) => {
  try {
    const {
      username,
      firstname,
      lastname,
      competences,
      experiences,
      education,
    } = req.body;

    // Création d'une nouvelle instance de Profil
    const newProfil = new Profil({
      username,
      firstname,
      lastname,
      competences,
      experiences,
      education,
    });

    // Enregistrement du profil dans la base de données
    const savedProfil = await newProfil.save();

    res.status(201).json(savedProfil); // Réponse avec le profil créé
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création du profil." });
  }
};

const getProfil = async (req, res) => {
  try {
    const id = req.id;
    const profil = Profil.findById(id).exec();
    res.status(200).json(getProfil);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération du profil." });
  }
};

module.exports = {
  createProfil,
  getProfil,
  // Ajoutez d'autres méthodes de contrôleur au besoin
};
