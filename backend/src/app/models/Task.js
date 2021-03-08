import Sequelize, { Model } from "sequelize";

class Task extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      priority: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    },
    {
      sequelize, 
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'user_id'});
    this.hasOne(models.Cover, {foreignKey: 'task_id'});
  }
}

export default Task;
