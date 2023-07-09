import {validate, Joi} from 'express-validation';

const validatePost = validate({
  body: Joi.object({
      id_paciente: Joi.number().integer().required(),
      data_atendimento: Joi.date().iso().required(), 
      observacao: Joi.string().min(6).max(250).required(),
      id_psicologo: Joi.number().integer().optional(),
    })
  });


const middlewaresAtendimentos = {
  postAtendimento: async (req, res, next) => { 
    await validatePost(req, res, next);  
  }
};

  export default middlewaresAtendimentos;