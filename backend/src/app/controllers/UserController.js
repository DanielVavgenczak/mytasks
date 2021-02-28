import User from '../models/User';

class UserController {
    async store(req, res) {
        
        const userExist = await User.findOne({where:{email: req.body.email}})

        if(userExist) {
            return res.json({error: 'User already exists'});
        }

        const {id, name, lastname,} = await User.create(req.body);

        return res.json({
            id,
            name,
            lastname
        });
    }

    async update(req, res) {    

        return res.json("Update user");
    }
}

export default new UserController;