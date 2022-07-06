#DROP DATABASE bikeRelacional;

CREATE DATABASE bikeRelacional;

USE bikeRelacional;

CREATE TABLE Usuarios (
id INT AUTO_INCREMENT,
nombre VARCHAR(300) NOT NULL,
email VARCHAR(300),
urlImg varchar(300) NOT NULL,
contrasena VARCHAR(300) NOT NULL,
about VARCHAR(5000) NOT NULL,
longitud VARCHAR(500),
latitud VARCHAR(500),
modelo VARCHAR(300) NOT NULL,
anio CHAR(4) NOT NULL,
PRIMARY KEY(id)
);
INSERT INTO Usuarios VALUES(null, "Miahi", "mihai@gmail.com", "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg", "Miahi1234*", "motero", "32.30494", "-3.4938492", "Kawasaki", "2019");

SELECT * FROM Usuarios;


CREATE TABLE Rutas (
id INT AUTO_INCREMENT,
nombre VARCHAR(300) NOT NULL,
provincia VARCHAR(300) NOT NULL,
km VARCHAR(300),
PRIMARY KEY(id)
);


INSERT INTO Rutas VALUES(null, "Oces del Duraton", "Cacers", "230Km");

SELECT * FROM Rutas;




CREATE TABLE Usuarios_Rutas(
id INT AUTO_INCREMENT,
fecha CHAR(12) NOT NULL,
fk_id_usuario INT NOT NULL,
fk_id_ruta INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY(fk_id_usuario) REFERENCES Usuarios(id) ON UPDATE CASCADE ON DELETE CASCADE, 
FOREIGN KEY(fk_id_ruta) REFERENCES Rutas(id) ON UPDATE CASCADE ON DELETE CASCADE
);


INSERT INTO Usuarios_Rutas VALUES(null, "2022-03-02", "2", "1");
SELECT * FROM Usuarios_Rutas;