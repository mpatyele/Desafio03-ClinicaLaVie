import { validate, Joi } from "express-validation"


const validatePost = validate({
  body: Joi.object({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      idade: Joi.date().required(),
    })
  })

  const validatePut = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        idade: Joi.date().required(),
      })
    })

  const middlewaresPacientes = {
  postPaciente: async (req, res, next) => { 
    await validatePost(req, res, next);  
  },
  
  putPacienteById: async (req, res, next) => { 
    await validatePut(req, res, next);  
  },
  };
    
 export default middlewaresPacientes;