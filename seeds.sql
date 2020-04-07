-- dummy data

INSERT INTO department (department_name)
VALUES ("IT"), ("Admin"), ("HR"), ("Marketing"), ("Sales");

INSERT INTO role (role_title, salary, department_id)
VALUES ("Data Analyst", 50, 1), ("OSL", 35, 2), ("HR Specialist", 30, 3), ("Staff", 30, 4),("Associate", 35, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 2), ("Jane", "Doe", 2, 2), ("Richard", "Roe", 3, 2);