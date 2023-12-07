const { Schema, model } = require("mongoose");

const profilSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  competences: {
    type: [String], // Si les compétences sont multiples, utilisez un tableau de chaînes
    required: true,
  },
  experiences: {
    type: [
      {
        nomEtablissement: String,
        posteOccupe: String,
        periodedEmploi: {
          type: Date,
        },
      },
    ],
    required: true,
  },
  education: {
    type: [
      {
        nom: String,
        diplome: String,
        domainedEtude: String,
        annee: {
          type: Date,
        },
      },
    ],
    required: true,
  },

  avatar: {
    type: String,
  },

  domaine: { type: Schema.Types.ObjectId, ref: "Domaine", required: true },
});

module.export = model("Profil", profilSchema);
