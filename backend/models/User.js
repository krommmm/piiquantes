//Création d'un modèle d'utilisateur pour la bdd

const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
var mongodbErrorHandler = require('mongoose-mongodb-errors');

mongoose.plugin(mongodbErrorHandler);


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(mongodbErrorHandler);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
