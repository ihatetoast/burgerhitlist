CREATE DATABASE `ufos_db`;
USE `ufos_db`;

CREATE TABLE `ufos` (
  id INT PRIMARY KEY AUTO_INCREMENT, 
  project_name varchar(75) NOT NULL,
  craft VARCHAR(50) NOT NULL,
  inProg BOOLEAN DEFAULT false,
);