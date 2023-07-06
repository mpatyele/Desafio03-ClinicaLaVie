create database clinicalavie;

use clinicalavie;

create table Pacientes (
	id integer auto_increment primary key,
    nome varchar(100) not null,
    email varchar(255) not null,
    idade integer,
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
	IdConsulta int  auto_increment primary key,
    idPaciente int,
    idPsicologo integer(8),
    numProntuario varchar(50),
	FOREIGN KEY (idPaciente) REFERENCES Pacientes(id),    
    FOREIGN KEY (idPsicologo) REFERENCES Psicologos(id)
);