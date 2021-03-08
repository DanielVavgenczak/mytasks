import Sequelize, {Model} from 'sequelize';

class Cover extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            path: Sequelize.STRING,
            task_id: Sequelize.INTEGER
        }, 
        {
            sequelize
        });

        return this;
    }

    static associate(models) {
     // this.hasOne(models.Task, {foreignKey: 'task_id'});
    }
}

export default Cover;