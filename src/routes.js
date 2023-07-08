import { Router } from 'express';
import PsiController from './app/controllers/PsiController.js';
import PacienteController from './app/controllers/pacienteController.js'
import AtendimentosController from './app/controllers/atendimentoController.js';


import validate from './validacoes/psiValidacao.js'
import { AuthController } from './validacoes/auth/authController.js';




const routes = new Router();

// const authController = new AuthController;
routes.post('/create', PsiController.cadastrarPsi) 
routes.post('/login', PsiController.login)

routes.get('/psicologos', PsiController.listarPsicologos)
routes.get('/psicologos/:id', PsiController.listarPsicologoId)
routes.put('/psicologos/:id', PsiController.atualizarPsicologoId)
routes.delete('/psicologos/:id', PsiController.deletarPsicologo)


routes.post('/pacientes', PacienteController.cadastrarPaciente )
routes.get('/pacientes', PacienteController.listarPacientes )
routes.get('/pacientes/:id', PacienteController.listarPacienteId )
routes.put('/pacientes/:id', PacienteController.atualizarPacienteId )
routes.delete('/pacientes/:id', PacienteController.deletarPaciente)


routes.post('/atendimentos', AtendimentosController.cadastrarAtendimento)
routes.get('/atendimentos', AtendimentosController.listarAtendimentos)




export default routes
