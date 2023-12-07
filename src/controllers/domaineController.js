const Domaine = require("../models/domaineModels");

// Contrôleur pour la création d'un domaine
const createDomaine = async (req, res) => {
  try {
    const { nom } = req.body;

    // Création d'une nouvelle instance de domaine
    const newDomaine = new Domaine({
      nom,
    });

    // Enregistrement du domaine dans la base de données
    const savedDomaine = await newDomaine.save();

    res.status(201).json(savedDomaine); // Réponse avec le domaine créé
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la création du domaine." });
  }
};

// Contrôleur pour la récupération de tous les domaines
const getAllDomaines = async (req, res) => {
  try {
    const domaines = await Domaine.find();
    res.status(200).json(domaines);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des domaines." });
  }
};

module.exports = {
  createDomaine,
  getAllDomaines,
  // Ajoutez d'autres méthodes de contrôleur au besoin
};
