const { Psicologos } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const errors = require("../core/errors/errors.js");
const bcrypt = require("bcryptjs");


const controllerLogin = {
    postLogin: async (req, res)=>{
        const {email, senha} = req.body;

        if(!email || !senha ) return res.status(401).json(errors.email_ou_senha_invalido);
    
        const psicologo = await Psicologos.findOne({
            where:{
                email,
            }
        });
    
        if(!psicologo || !bcrypt.compareSync(senha, psicologo.senha)){ return res.status(401).json(errors.email_ou_senha_invalido);}
        else  return res.status(200).json(jwt.sign(
            {
                id: psicologo.id,
                email: psicologo.email,
                nome: psicologo.nome
            },
            secret.key
        ));
    },

};

export default controllerLogin;