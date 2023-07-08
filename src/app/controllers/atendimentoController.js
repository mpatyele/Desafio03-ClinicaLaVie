import { Sequelize } from "sequelize";
import express from "express";
import Atendimentos from "../models/Atendimentos.js";
import Pacientes from "../models/Pacientes.js";

const AtendimentosController = {
   async cadastrarAtendimento(req, res) {
    const { id_paciente, data_atendimento, observacao, id_psicologo } = (req.body);

    if (!id_paciente || !data_atendimento || !observacao) {
      return res.status(400).json({
        message:
          "Erro na requisição. Verifique se todas as informações são fornecidas corretamente.",
      });
    }

    const novoAtendimento = await Atendimentos.create({
      id_paciente,
      data_atendimento,
      observacao,
      id_psicologo,
    });
    return res.status(201).json({
      id_paciente,
      data_atendimento,
      observacao,
      id_psicologo
    });
  },

  //GET
  async listarAtendimentos(req, res) {
    const listaDeAtendimentos = await Atendimentos.findAll({});
    return res.status(200).json(listaDeAtendimentos);
  },


};

export default AtendimentosController;
