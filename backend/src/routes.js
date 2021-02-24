import {Router} from 'express';

const routes = new Router();

routes.get('/',(req, res) => {
    return res.json('Funcionando a rota')
});


export default routes;