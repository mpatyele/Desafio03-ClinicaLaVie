import Psicologos from "../models/Psicologos.js";

class PsiController {
    async store(req, res){
        const {id, name, email, crp} = await Psicologos.create(req.body)

        return response.json({
            id, 
            name,
            email, 
            crp
        })
    }
}

export default new PsiController()