import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Task from '../app/models/Task';

const models = [
  Task
];

class Database {
  constructor() {
    this.conect();
  }
  conect() {
    this.connection = new Sequelize(dbConfig);
    models.map(model =>model.init(this.connection));
  }
}

export default new Database();
