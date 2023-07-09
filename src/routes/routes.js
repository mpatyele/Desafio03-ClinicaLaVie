import { Router } from 'express';
import PsiController from '../app/controllers/PsiController.js';
import PacienteController from '../app/controllers/pacienteController.js'
import AtendimentosController from '../app/controllers/atendimentoController.js';

import middlewaresAtendimentos from '../middlewares/middlewareAtendimento.js';
import middlewaresPacientes from '../middlewares/middlewarePacientes.js';
import middlewaresPsicologos from '../middlewares/middlewarePsicologos.js';
import middlewaresLogin from '../middlewares/middlewareLogin.js';
import controllerLogin from '../app/controllers/authControllerLogin.js';
import auth from '../middlewares/auth.js';





const routes = new Router();

//LOGIN
routes.post('/login', middlewaresLogin.postLogin, controllerLogin.login)

//CRUD PSICOLOGOS
routes.get('/psicologos', PsiController.listarPsicologos)
routes.get('/psicologos/:id', PsiController.listarPsicologoId)
routes.post('/psicologos', middlewaresPsicologos.postPsicologo ,PsiController.cadastrarPsi) 
routes.put('/psicologos/:id', PsiController.atualizarPsicologoId) 
routes.delete('/psicologos/:id', PsiController.deletarPsicologo)


//CRUD PACIENTES
routes.get('/pacientes', PacienteController.listarPacientes )
routes.get('/pacientes/:id', PacienteController.listarPacienteId )
routes.post('/pacientes', middlewaresPacientes.postPaciente, PacienteController.cadastrarPaciente )
routes.put('/pacientes/:id', middlewaresPacientes.putPacienteById, PacienteController.atualizarPacienteId )
routes.delete('/pacientes/:id', PacienteController.deletarPaciente)


//CRUD ATENDIMENTOS
routes.get('/atendimentos', AtendimentosController.listarAtendimentos)
routes.get('/atendimentos/:id', AtendimentosController.listarAtendimentoId)
routes.post('/atendimentos',  auth, middlewaresAtendimentos.postAtendimento,  AtendimentosController.cadastrarAtendimento)


export default routes
