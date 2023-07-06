import Pacientes from "../models/Pacientes.js";


const PacienteController = {    
    async cadastrarPaciente(req, res) {
        const { nome, email, idade } = req.body;

        const novoPaciente = await Pacientes.create({
            nome,
            email,
            idade
        })
        return res.status(201).json(novoPaciente);
    },

    listarPacientes: async (req, res) => {
        const listaDePacientes = await Pacientes.findAll({
        });
        res.json(listaDePacientes);
    },

    listarPacienteId: async (req, res) => {
        const { id } = req.params;
        const { nome, email, idade } = req.body;
    
        if (!id) return res.status(401).json("id invalido!");
    
        const paciente = await Pacientes.findByPk(id)
    
        res.json(paciente);
      },
}


export default PacienteController