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
}

export default Task;
