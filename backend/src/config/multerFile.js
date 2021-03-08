import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
    storage: multer.diskStorage({
        //destination:path.resolve(__dirname,"..","..","tmp","uploads"),
        destination: function (req, file, cb) {
            if(req.url == '/tasks') {
                //path.resolve(__dirname,"..","..","tmp","uploads","tasks");
                cb(null, path.resolve(__dirname,"..","..","tmp","uploads","tasks"));

            }else if(req.url == "/avatar") {
                cb(null, path.resolve(__dirname,"..","..","tmp","uploads","avatar"));
            }
            //cb(null, '/tmp/my-uploads')
        },
        filename: (req, file, cb) => {
           crypto.randomBytes(16, (err, res) => {
            if(err) return cb(err)
            return cb(null, res.toString("hex") + path.extname(file.originalname));
           })
        }
    })
}