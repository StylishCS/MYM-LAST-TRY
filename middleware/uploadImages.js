const multer = require("multer");
const path = require("path");
let storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});
const fileFilter = (req, file, cb) => {
    if (
    // file.mimetype === "image/png" ||
    // file.mimetype === "image/jpg" ||
    // file.mimetype === "image/jpeg"||
    // file.mimetype === "image/pdf"
    true
    ) {
    cb(null, true);
    } else {
    cb(new Error("File format should be PNG,JPG,JPEG"), false);
    }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = upload;