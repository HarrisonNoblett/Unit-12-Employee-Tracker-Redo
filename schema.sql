DROP DATABASE IF EXISTS Employee_db;
CREATE database Employee_db;

USE Employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT;
    name VARCHAR(30);
    PRIMARY KEY (id);
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT;
    title VARCHAR(30);
    salary DECIMAL(100,100);
    department_id INT;
    PRIMARY KEY (id);
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT;
    first_name VARCHAR(30);
    last_name VARCHAR(30);
    role_id INT;
    manager_id INT;
    PRIMARY KEY (id);
);