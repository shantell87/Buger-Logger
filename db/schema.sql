DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT,
burger_name VARCHAR(255) not null,
devoured BOOLEAN not null,
PRIMARY KEY(id)
);