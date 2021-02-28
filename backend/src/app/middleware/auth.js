import jwt from 'jsonwebtoken';
import {promisify} from  'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const authorization = req.headers.authorization;

    if(!authorization) {
        return res.status(401).json({error: 'Token is not provided'});
    } 
    const tokenCut = authorization.split(' ');

    const [, token] = tokenCut;

    try{
        const decode = await promisify(jwt.verify)(token, authConfig.secret )
        req.userId = decode.id;
        return next();
    }catch(err) {
        return res.status(401).json({error: 'Token is invalid'});
    }

}