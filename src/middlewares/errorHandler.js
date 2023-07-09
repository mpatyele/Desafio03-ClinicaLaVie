import { ValidationError } from "express-validation";
import UnauthorizedError from 'express-jwt'

export default (error, req, res, next) => {
    if(error instanceof ValidationError){
      return res.status(error.statusCode).json(error);
    }
    if(error instanceof UnauthorizedError) {
      return res.status(error.statusCode).json(error)
    }
    return res.status(500).json(error);
  };