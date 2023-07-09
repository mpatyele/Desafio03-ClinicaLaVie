import { validate, Joi } from "express-validation"


const validatePost = validate({
  body: Joi.object({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(30).required(), 
      apresentacao: Joi.string().min(6).max(700).required()
    })
  })

  
const validatePut = validate({
  body: Joi.object({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(30).required(), 
      apresentacao: Joi.string().min(6).max(700).required()
    })
  })

const middlewaresPsicologos = {

  postPsicologo: async (req, res, next) => { 
    await validatePost(req, res, next);  
  },
  

  putPsicologoById: async (req, res, next) => { 
    await validatePut(req, res, next);  
  },
  
}

    
export default middlewaresPsicologos;