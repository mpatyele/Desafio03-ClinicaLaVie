import { Sequelize } from "sequelize";
import express from "express";
import Pacientes from "../models/Pacientes.js";
import errors from "../../core/errors/errors.js";

const PacienteController = {
  //GET
  listarPacientes: async (req, res) => {
    const listaDePacientes = await Pacientes.findAll({});
    if (!listaDePacientes) {
      return res.status(200).json({});
    }
    res.status(200).json(listaDePacientes);
  },


  //GET POR ID
  listarPacienteId: async (req, res) => {
    const { id } = req.params;

    const paciente = await Pacientes.findByPk(id);

    if (!paciente) {
      return res.status(404).json(errors.id_nao_encontrada)
    }

    res.status(200).json(paciente);
  },


  //POST 
  async cadastrarPaciente(req, res) {
    const pacienteExists = await Pacientes.findOne({
      where: { email: req.body.email },
    });

    if (pacienteExists) {
      return res.status(400).json({ error: "Paciente ja cadastrado!" });
    }

    const { nome, email, idade } = req.body;

    if ((!nome || !email || !idade)) {
      return res.status(400).json({
        message:
          "Erro na requisição. Verifique se todas as informações são fornecidas corretamente.",
      });
    }

    const novoPaciente = await Pacientes.create({
      nome,
      email,
      idade,
    });
    return res.status(201).json(novoPaciente);
  },


  //PUT 
  async atualizarPacienteId(req, res) {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    const paciente = await Pacientes.findByPk(id);

    if (!paciente) {
      return res
        .status(404)
        .json(errors.id_nao_encontrada);
    }

   
    const pacienteAtualizado = await Pacientes.update(
      {
        nome,
        email,
        idade,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json(await Pacientes.findByPk(id))
  },


  //DELETAR
  async deletarPaciente(req, res) {
    const { id } = req.params;

    const paciente = await Pacientes.findByPk(id);

    if (!paciente) {
      return res
        .status(404)
        .json(errors.id_nao_encontrada);
    }

    await Pacientes.destroy({
      where: {
        id,
      },
    }).then(()=>{
      res.status(204).end();
    });
  },
};

export default PacienteController;
