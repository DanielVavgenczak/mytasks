import {Router} from 'express';
import multer from 'multer';
//task
import TaskController from './app/controllers/TaskController';
//auth
import AuthController from './app/controllers/AuthController';
import UserController from './app/controllers/UserController';
//avatar
import AvatarController from './app/controllers/AvatarController';
//middleware
import middlewareAuth from './app/middleware/auth';
import multerFiler from './config/multerFile';

const multerUpload = multer(multerFiler);
const routes = new Router();

//auth
routes.post('/user', UserController.store);
routes.put("/user", middlewareAuth, UserController.update);
routes.post('/auth', AuthController.store);
//Avatar 
routes.post("/avatar", middlewareAuth, multerUpload.single('file'), AvatarController.store);
//tasks
routes.get('/tasks',middlewareAuth, TaskController.index);
routes.post('/tasks',multerUpload.single('cover'), middlewareAuth,TaskController.store);

export default routes;