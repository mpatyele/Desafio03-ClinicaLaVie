import { Sequelize } from "sequelize";
import Psicologos from "../models/Psicologos.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import secret from "../../config/secret.js";
import errors from "../../core/errors/errors.js";
import { validate, Joi } from "express-validation"
import middlewaresPsicologos from "../../middlewares/middlewarePsicologos.js"

class PsiController {
  //GET
  async listarPsicologos(req, res) {
    const listaDePsicologos = await Psicologos.findAll({});
    if (listaDePsicologos.length === 0) {
      return res.status(200).json({});
    }
    return res.status(200).json(listaDePsicologos);
  }

  //GET por ID
  async listarPsicologoId(req, res) {
    const { id } = req.params;

    const psicologo = await Psicologos.findByPk(id, {
      attributes: {
        exclude: ["password_hash"],
      },
    });

    if (!psicologo) {
      return res.status(404).json(errors.id_nao_encontrada);
    }

    return res.status(200).json(psicologo);
  }

  //POST
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

  //PUT
  async atualizarPsicologoId(req, res) {
    const { id } = req.params;
    const { nome, email, password, apresentacao} = req.body;

    const atualizarPsicologo = await Psicologos.findByPk(id);

    if (!atualizarPsicologo) {
      return res.status(400).json(errors.id_nao_encontrada);
    } 

    if (!nome || !email || !password || !apresentacao) {
      return res.status(400).json(errors.id_nao_encontrada);

    }

    if(password.length < 6) {
      return res.status(400).json({message:"Erro na requisicao"})
    }   
  

    const newPassword = password ? bcrypt.hashSync(req.body.password, 6) : null;
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

    return res.status(200).json(await Psicologos.findByPk(id));
  }

  

  //DELETE
  async deletarPsicologo(req, res) {
    const { id } = req.params;

    const psicologo = await Psicologos.findByPk(id);

    if (!psicologo) {
      return res.status(404).json(errors.id_nao_encontrada);
    }

    await Psicologos.destroy({
      where: {
        id,
      },
    }).then(() => {
      res.status(204).end();
    });
  }
}

export default new PsiController();
