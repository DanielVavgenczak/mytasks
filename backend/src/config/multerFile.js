import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
    storage: multer.diskStorage({
        destination:path.resolve(__dirname,"..","..","tmp","uploads"),
        filename: (req, file, cb) => {
            console.log("Executando aqui o outro cara")
           crypto.randomBytes(16, (err, res) => {

            if(err) return cb(err)
            return cb(null, res.toString("hex") + path.extname(file.originalname));
           })
        }
    })
}