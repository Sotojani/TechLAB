CREATE TABLE Estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    ciudad VARCHAR(50)
);

-- Insertar datos básicos en la tabla
INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES ('Juan', 20, 'Bogotá');
INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES ('Ana', 22, 'Medellín');
INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES ('Luis', 19, 'Cali');

-- Consultas básicas
-- Consultar todos los registros de la tabla
SELECT * FROM Estudiantes;

-- Filtrar estudiantes por ciudad
SELECT * FROM Estudiantes WHERE ciudad = 'Medellín';

-- Consultar estudiantes mayores de 20 años
SELECT * FROM Estudiantes WHERE edad > 20;