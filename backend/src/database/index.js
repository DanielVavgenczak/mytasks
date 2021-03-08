import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Task from '../app/models/Task';
import User from '../app/models/User';
import Avatar from '../app/models/Avatar';
import Cover from '../app/models/Cover';

const models = [
  User,
  Task,
  Avatar,
  Cover
];

class Database {
  constructor() {
    this.conect();
  }
  conect() {
    this.connection = new Sequelize(dbConfig);
    models.map(model => model.init(this.connection))
          .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
