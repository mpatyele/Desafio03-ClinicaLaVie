const { validate, Joi } = require("express-validation");
const Psicologos = require ("../controllers/controllerPsicologos.js");

const validatePost = validate({
  body: Joi.object({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      senha: Joi.string().min(6).max(30).required(), 
      apresentacao: Joi.string().min(50).max(1000).required()
    })
  })

  
const validatePut = validate({
  body: Joi.object({
      nome: Joi.string().optional(),
      email: Joi.string().email().optional(),
      senha: Joi.string().min(6).max(30).optional(), 
      apresentacao: Joi.string().min(50).max(1000).optional()
    })
  })

const middewaresPsicologos = {
  postPsicologo: async (req, res, next) => { 
    await validatePost(req, res, next);  
  },
  putPsicologoById: async (req, res, next) => { 
    await validatePut(req, res, next);  
  },
  };
    
  module.exports = middewaresPsicologos;