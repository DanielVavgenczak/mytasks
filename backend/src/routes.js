import {Router} from 'express';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

//tasks
routes.get('/tasks',TaskController.index);
routes.post('/tasks',TaskController.store);

export default routes;