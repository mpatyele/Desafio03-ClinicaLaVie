import Psicologos from "../models/Psicologos.js";

class PsiController {
    async store(req, res){
        const {id, nome, email, crp} = await Psicologos.create(req.body)

        return res.json({
            id, 
            nome,
            email, 
            crp
        })
    }
}

export default new PsiController()