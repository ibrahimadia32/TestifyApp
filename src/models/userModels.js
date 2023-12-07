const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hashpass: {
    type: String,
    required: true,
  },
});

module.export = model("User", userSchema);
