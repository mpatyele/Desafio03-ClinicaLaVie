import { Sequelize } from "sequelize";
import express from "express";
import Atendimentos from "../models/Atendimentos.js";
import Pacientes from "../models/Pacientes.js";
import errors from "../../core/errors/errors.js";


const AtendimentosController = {
  //GET
  async listarAtendimentos(req, res) {
    const listaDeAtendimentos = await Atendimentos.findAll({});
    if (listaDeAtendimentos.length === 0) {
      return res.status(200).json({});
    }
    return res.status(200).json(listaDeAtendimentos);
  },

  //GET POR ID
  listarAtendimentoId: async (req,res) => {
    const { id } = req.params;
    const atendimento = await Atendimentos.findByPk(id);
    if (!atendimento) {
      return res.status(404).json( errors.id_nao_encontrada );
    }
    res.json(atendimento);
  },

  //POST 
   async cadastrarAtendimento(req, res) {
    const { id_paciente, data_atendimento, observacao, id_psicologo } = (req.body);

 
    const novoAtendimento = await Atendimentos.create({
      id_paciente,
      data_atendimento,
      observacao,
      id_psicologo,
    });
  
    return res.status(201).json(novoAtendimento);
  },

  


};

export default AtendimentosController;
