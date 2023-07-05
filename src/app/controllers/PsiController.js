import Psicologos from "../models/Psicologos.js";
import bcrypt from "bcrypt";


class PsiController {
    async cadastrarPsi(req, res){
        const {id, nome, email, crp, apresentacao} = await Psicologos.create(req.body)

        const psiExists = Psicologos.findOne({where: {email: req.body.email}})

        if (psiExists) {
            return res.status(400).json({error: "Psicologo ja cadastrado!"})
        }

        return res.json(console.log("Psicologo cadastrado com sucesso!"),{
            id, 
            nome,
            email,
            crp,
            apresentacao,
          
        })
    }

    async login(req,res) {
        const {email, password} = await Psicologos.verify(req.body)

        if(!email || !password) {
            return res.status(401).json({ message: "E-mail ou senha inválidos, verifique e tente novamente" })
        } 

        return res.status(401).json({message: 'E-mail ou senha inválido, verifique e tente novamente'})      


    }

}

export default new PsiController()