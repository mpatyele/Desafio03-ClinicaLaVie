import { Router } from 'express';
import PsiController from './app/controllers/PsiController.js'



const routes = new Router();

routes.post('/psi', PsiController.store)

export default routes
