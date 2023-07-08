import { Sequelize } from "sequelize";
import Psicologos from "../models/Psicologos.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import secret from "../../config/secret.js";

class PsiController {
  async cadastrarPsi(req, res) {
    const psiExists = await Psicologos.findOne({
      where: { email: req.body.email },
    });

    if (psiExists) {
      return res.status(400).json({ error: "Psicologo ja cadastrado!" });
    }

    const newPassword = bcrypt.hashSync(req.body.password, 6);

    const newPsi = await Psicologos.create({
      nome: req.body.nome,
      email: req.body.email,
      password_hash: newPassword,
      apresentacao: req.body.apresentacao,
      crp: req.body.crp,
    });

    return res.status(201).json({ newPsi });
  }

  async login(req, res) {
    const psiExists = await Psicologos.findOne({
      where: { email: req.body.email },
    });

    if (!psiExists) {
      return res.status(400).json({ error: "Psicologo inexistente!" });
    }

    const { email, password } = req.body;

    if (!bcrypt.compareSync(password, psiExists.password_hash)) {
      return res.status(401).json({
        message: "E-mail ou senha inválido, verifique e tente novamente",
      });
    }

    const token = jwt.sign(
      {
        id: psiExists.id,
        email: psiExists.email,
        nome: psiExists.nome,
      },
      secret.key
    );
    return res.status(200).json({ token });
  }

  async listarPsicologos(req, res) {
    const listaDePsicologos = await Psicologos.findAll({});
    return res.status(200).json(listaDePsicologos);
  }

  async listarPsicologoId(req, res) {
    const { id } = req.params;

    const psicologo = await Psicologos.findByPk(id, {
      attributes: {
        exclude: ["password_hash"],
      },
    });

    if (psicologo == null) {
      return res.status(401).json({ message: "id invalido!" });
    }

    return res.status(200).json(psicologo);
  }

  async atualizarPsicologoId(req, res) {
    const { id } = req.params;
    const { nome, email, password, apresentacao } = req.params;
    let atualizarPsicologo = await Psicologos.findByPk(id);

    if (!atualizarPsicologo) {
      return res.status(401).json({ message: "id invalido!" });
    }

    if ((!nome, !email, !password, !apresentacao)) {
      return res.status(400).json({ error: "Erro na requisicao!" });
    }

    const newPassword = bcrypt.hashSync(req.body.password, 6);
    const psiAtualizado = await Psicologos.update(
      {
        nome: req.body.nome,
        email: req.body.email,
        password_hash: newPassword,
        apresentacao: req.body.apresentacao,
        crp: req.body.crp,
      },
      {
        where: {
          id,
        },
      }
    );

    return res.status(200).json({
      nome: req.body.nome,
      email: req.body.email,
      password_hash: newPassword,
      apresentacao: req.body.apresentacao,
      crp: req.body.crp,
    });
  }

  async deletarPsicologo(req, res) {
    const { id } = req.params;

    const psicologo = await Psicologos.findByPk(id);

    if (!psicologo) {
      return res
        .status(404)
        .json({ message: "Erro na requisição. Id não encontrado!" });
    }

    await Psicologos.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json({ message: "Psicologo deletado" }); //status 204 nao permite mensagem no body
  }
}

export default new PsiController();
