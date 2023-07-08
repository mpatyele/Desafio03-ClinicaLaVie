create database clinicalavie;

use clinicalavie;

create table Pacientes (
	id integer auto_increment primary key,
    nome varchar(100) not null,
    email varchar(255) not null,
    idade date,
    created_At DATE,
    updated_At DATE
);

create table Psicologos(
	id integer auto_increment primary key,     
    nome varchar(100) not null,
    email varchar(255) not null,
    password_hash varchar(200),
    crp integer(8), 
    apresentacao varchar(255),
    created_At DATE,
    updated_At DATE    
);

create table Atendimentos (
	idConsulta int auto_increment primary key not null,
    id_psicologo INTEGER NOT NULL,
    id_paciente INTEGER NOT NULL,
    data_atendimento DATETIME,
    observacao VARCHAR(255),
    CONSTRAINT psicologos FOREIGN KEY (id_psicologo) REFERENCES psicologos(id),
	CONSTRAINT pacientes FOREIGN KEY (id_paciente) REFERENCES pacientes(id)

);