CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
  id INT PRIMARY KEY AUTO_INCREMENT, 
  burger_name varchar(50) NOT NULL,
  devoured BOOL NOT NULL default 0
);