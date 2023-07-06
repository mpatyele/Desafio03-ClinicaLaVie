import jwt from 'jsonwebtoken'

export class AuthController{
    login(req, res) {
        const { body: {password, email}} =req;

        const secretKey = 'secret'

        const token = jwt.sign({email}, secretKey, {expiresIn: '1h'})

        return res.json({token})
    }

    validate(req, res){
        const {body: {token}}=req;

        const secretKey = 'secret'

        jwt.verify(token, secretKey,(err, decoded) => {
            if (err){
                return res.status(401).json({message: "Usuario ou senha invalidos!"})
            }
            return res.status(200).json({message: "Bem vindo!"})
        })

    }
}