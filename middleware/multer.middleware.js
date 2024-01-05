import multer from "multer";
import path from "path";

// const dirpath = path.join(__dirname)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        
        return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, `profile.png`)
    }
})

export const upload = multer({ storage })