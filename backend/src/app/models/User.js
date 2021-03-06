import Sequelize, {Model} from 'sequelize'
import bcrypt from 'bcryptjs';

class User extends Model {

    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            lastname: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            is_admin: Sequelize.BOOLEAN
        }, {
            sequelize
        });
        /** implement hash password */
        this.addHook('beforeSave', async user => {
            if(user.password) {
               user.password = await bcrypt.hash(user.password, 8)
            }
        });

        return this;
    }

    static associate(models) {
        this.hasMany(models.Task, {foreignKey: 'user_id'});
        this.hasMany(models.Avatar, {foreignKey: 'user_id'})
    }

    verifyPassword(password) {
        return bcrypt.compare(password, this.password)
    }

}

export default User;