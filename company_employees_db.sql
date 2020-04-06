DROP DATABASE IF EXISTS company_employees_db;
CREATE database company_employees_db;

USE company_employees_db;

-- * **department**:
CREATE TABLE department (
    --   * **id** - INT PRIMARY KEY
    id INT NOT NULL AUTO_INCREMENT,
    --   * **name** - VARCHAR(30) to hold department name
    department_name VARCHAR(30) NOT NULL,

    PRIMARY KEY(id)
);

-- * **role**:
CREATE TABLE role (
--   * **id** - INT PRIMARY KEY
id INT NOT NULL AUTO_INCREMENT,
--   * **title** -  VARCHAR(30) to hold role title
role_title VARCHAR(30),
--   * **salary** -  DECIMAL to hold role salary
salary DECIMAL(10,4) NOT NULL,
--   * **department_id** -  INT to hold reference to department role belongs to
department_id INT NOT NULL,
FOREIGN KEY (department_id ) REFERENCES department(id),

PRIMARY KEY(id)
);
-- CREATE TABLE Orders (
--     OrderID int NOT NULL,
--     OrderNumber int NOT NULL,
--     PersonID int,
--     PRIMARY KEY (OrderID),
--     FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
-- );

-- * **employee**:
CREATE TABLE employee (
--   * **id** - INT PRIMARY KEY
id INT NOT NULL AUTO_INCREMENT,
--   * **first_name** - VARCHAR(30) to hold employee first name
first_name VARCHAR(30) NOT NULL,
--   * **last_name** - VARCHAR(30) to hold employee last name
last_name VARCHAR(30) NOT NULL,
--   * **role_id** - INT to hold reference to role employee has
role_id INT NOT NULL,
 FOREIGN KEY(role_id) REFERENCES role(id),
--   * **manager_id** - INT to hold reference to another employee that manager of the current employee.
--   This field may be null if the employee has no manager
manager_id INT NULL,

PRIMARY KEY(id)
);



