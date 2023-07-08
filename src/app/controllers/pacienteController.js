import { Sequelize } from "sequelize";
import express from "express";
import Pacientes from "../models/Pacientes.js";

const PacienteController = {
  async cadastrarPaciente(req, res) {
    const pacienteExists = await Pacientes.findOne({
      where: { email: req.body.email },
    });

    if (pacienteExists) {
      return res.status(400).json({ error: "Paciente ja cadastrado!" });
    }

    const { nome, email, idade } = req.body;

    if (!nome, !email, !idade ) {
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


  
  listarPacientes: async (req, res) => {
    const listaDePacientes = await Pacientes.findAll({});
    res.json(listaDePacientes);
  },



  listarPacienteId: async (req, res) => {
    const { id } = req.params;

    const paciente = await Pacientes.findByPk(id);

    if (paciente == null) {
      return res.status(404).json({ message: "id invalido!" });
    }

    res.json(paciente);
  },




  async atualizarPacienteId(req, res) {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    const paciente = await Pacientes.findByPk(id);

    if (!paciente) {
      return res
        .status(404)
        .json({ message: "Erro na requisição. Paciente não encontrado!" });
    }

    if(!nome, !email, !idade) {
      return res.status(400).json({ error: "Erro na requisicao!" });
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

    return res.status(200).json({ nome, email, idade });
  },




  async deletarPaciente(req, res) {
    const { id } = req.params;

    const paciente = await Pacientes.findByPk(id);

    if (!paciente) {
      return res
        .status(404)
        .json({ message: "Erro na requisição. Paciente não encontrado!" });
    }

    await Pacientes.destroy({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "Paciente deletado" }); //status 204 nao permite mensagem
  },
};

export default PacienteController;
