create database clinicalavie;

use clinicalavie;

create table Pacientes (
	id integer auto_increment primary key,
    nome varchar(100),
    email varchar(255),
    idade integer,
    createdAt DATE,
    updatedAt DATE
);

create table Psicologos(
	id integer auto_increment primary key,
    crp integer(8),    
    nome varchar(100),
    email varchar(255),
    password varchar(50),
    password_hash varchar(200),
    apresentacao varchar(255),
    createdAt DATE,
    updatedAt DATE    
);

create table Atendimentos (
	IdConsulta int  auto_increment primary key,
    idPaciente int,
    idPsicologo integer(8),
    numProntuario varchar(50),
	FOREIGN KEY (idPaciente) REFERENCES Pacientes(id),    
    FOREIGN KEY (idPsicologo) REFERENCES Psicologos(id)
);