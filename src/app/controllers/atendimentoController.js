import { Sequelize } from "sequelize";
import express from "express";
import Atendimentos from "../models/Atendimentos.js";
import Pacientes from "../models/Pacientes.js";

const AtendimentosController = {
   async cadastrarAtendimento(req, res) {
    const { paciente_id, data_atendimento, observacao, idPsicologo } = (req.body);

    if (!paciente_id || !data_atendimento || !observacao) {
      return res.status(400).json({
        message:
          "Erro na requisição. Verifique se todas as informações são fornecidas corretamente.",
      });
    }

    const pacienteExists = await Atendimentos.findOne({
      where: { paciente_id },
    });

    if (!pacienteExists) {
      return res.status(400).json({
        message:
          "Erro na requisição. Verifique se todas as informações são fornecidas corretamente.",
      });
    }

    const novoAtendimento = await Atendimentos.create({
      paciente_id,
      data_atendimento,
      observacao,
      idPsicologo,
    });
    return res.status(201).json({
      paciente_id,
      data_atendimento,
      observacao,
      idPsicologo
    });
  },


  async listarAtendimentos(req, res) {
    const listaDeAtendimentos = await Atendimentos.findAll({});
    return res.status(200).json(listaDeAtendimentos);
  },
};

export default AtendimentosController;
