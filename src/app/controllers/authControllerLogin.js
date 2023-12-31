import Psicologos from "../models/Psicologos.js";
import jwt from "jsonwebtoken";
import secret from "../../config/secret.js";
import errors from "../../core/errors/errors.js";
import bcrypt from "bcrypt";




const controllerLogin = {
    //LOGIN
  async login(req, res) {
    const psiExists = await Psicologos.findOne({
      where: { email: req.body.email },
    });

    if (!psiExists) {
      return res.status(400).json({ error: "Psicologo inexistente!" });
    }

    const { email, password } = req.body;

    if (!bcrypt.compareSync(password, psiExists.password_hash)) {
      return res.status(401).json(errors.email_ou_senha_invalido);
    }

    const token = jwt.sign(
      {
        id: psiExists.id,
        email: psiExists.email,
        nome: psiExists.nome,
      },
      secret.key
    );
    return res.status(200).json(token);
  }
}


export default controllerLogin;