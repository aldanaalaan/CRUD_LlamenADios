CREATE DATABASE BaseRailway;
USE BaseRailway;

CREATE TABLE codigo(
    cod_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    cod_name VARCHAR(255) NOT NULL,
    cod_numLines INTEGER NOT NULL,
    cod_lenguaje VARCHAR(255) NOT NULL
);