import User from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

class AuthController {
    async store(req, res) {
        const {email, password} = req.body;
        
        const userExist = await User.findOne({
            where:{email}
        });

        if(!userExist) {
            return res.json({error: 'User not found!'})
        }
        
        if(!(await userExist.verifyPassword(password))) {
            return res.json({error: 'Password dont match!'})
        }
        
        const {id, name, lastname} = userExist;
        
        return res.json({
            user: {id, name, lastname},
            token:jwt.sign({id}, authConfig.secret, {expiresIn: authConfig.expiresIn})
        });
    }
}

export default new AuthController();