import jwt from 'jsonwebtoken'

export const validate = (req, res, next) => {
    const { body: { email, password }}= req;

    
    if(!email || !password) {
        return res.status(401).json({ message: "E-mail ou senha inválidos, verifique e tente novamente" })
    } 
    
    next()
}
