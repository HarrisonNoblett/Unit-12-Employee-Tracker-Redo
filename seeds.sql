INSERT INTO department (name)
VALUES ("HR"), ("IT"), ("Sales"), ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Coding", 1300.00, 1), ("Sales", 1200.00, 2), ("CEO", 1400.00, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Harrison", "Noblett", 1, 1), ("Martha", "Goodson", 2, 2), ("Leslie", "Blalock", 3, 3);
