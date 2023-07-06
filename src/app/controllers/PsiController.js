import { Sequelize } from "sequelize";
import Psicologos from "../models/Psicologos.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import secret from "../../config/secret.js";



class PsiController {
    async cadastrarPsi(req, res){
        const psiExists = await Psicologos.findOne({where: {email: req.body.email}})

        if (psiExists) {
            return res.status(400).json({error: "Psicologo ja cadastrado!"})
        } 

        const newPassword = bcrypt.hashSync(req.body.password, 6);

        const newPsi = await Psicologos.create({nome: req.body.nome, email: req.body.email, password_hash: newPassword});

        return res.status(201).json({newPsi})
        
    
    }

    async login(req,res) {
        const psiExists = await Psicologos.findOne({where: {email: req.body.email}})

        if (!psiExists) {
            return res.status(400).json({error: "Psicologo inexistente!"})
        }   
        const {email, password} =  (req.body)

        if (!bcrypt.compareSync(password, psiExists.password_hash)) {
            return res.status(401).json({message: "Senha invalida!"});
          }        

        const token = jwt.sign( {
            id: psiExists.id,
            email: psiExists.email,
            nome: psiExists.nome
        }, secret.key
        )
        return res.status(200).json({token}) 


    }

}

export default new PsiController()