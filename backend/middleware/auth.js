//Importation dotenv pour le fichier .env
require('dotenv').config();

const tokenSecret = {
  jwtSecret : process.env.JWT_SECRET
  }

const jwt = require("jsonwebtoken");

//Création middleware d'authentification, pour permettre aux requetes authentifiées de réussir
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, `${tokenSecret.jwtSecret}`); 
    const userId = decodedToken.userId;
    req.auth = {
      userId: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error }); 
  }
};
