//Utilisation de multer pour enregistrer les images sur le disque
const multer = require("multer");

//Configuration de du format des fichiers
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  //Enregistrement dans le dossier image
  destination: (req, file, callback) => {
    callback(null, "images");
  },

  //Configuration du nom de fichier
  filename: (req, file, callback) => {
    var name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    name = name.replace('.jpg',"")
    name =name.replace('.png',"")
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");
