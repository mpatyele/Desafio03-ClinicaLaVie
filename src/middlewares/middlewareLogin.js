import { validate, Joi } from "express-validation";


const validateLogin = validate({
  body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(250).required(), 
    })
});

  const middlewaresLogin = {
    postLogin: async (req, res, next) => { 
      await validateLogin(req, res, next);  
    }
};

 export default middlewaresLogin;