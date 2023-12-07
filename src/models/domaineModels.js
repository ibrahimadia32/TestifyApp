const { Schema, model } = require("mongoose");

const domaineSchema = new Schema({
  nomDomaine: {
    type: String,
    require: true,
  },
});

module.export = model("Domaine", domaineSchema);
