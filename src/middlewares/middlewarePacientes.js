const { validate, Joi } = require("express-validation");
const Pacientes = require ("../controllers/controllerPacientes.js");

const validatePost = validate({
  body: Joi.object({
      nome: Joi.string().required(),
      email: Joi.string().email().required(),
      nascimento: Joi.date().required(),
    })
  })

  const validatePut = validate({
    body: Joi.object({
        nome: Joi.string().optional(),
        email: Joi.string().email().optional(),
        nascimento: Joi.date().optional(),
      })
    })

  const middewaresPacientes = {
  postPaciente: async (req, res, next) => { 
    await validatePost(req, res, next);  
  },
  putPacienteById: async (req, res, next) => { 
    await validatePut(req, res, next);  
  },
  };
    
  module.exports = middewaresPacientes;