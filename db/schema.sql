DROP DATABASE IF EXISTS db;
CREATE DATABASE db;

\c db;

CREATE TABLE departments (
    id          SERIAL      PRIMARY KEY,
    name        VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id              SERIAL      PRIMARY KEY,
    title           VARCHAR(50) UNIQUE NOT NULL,
    salary          DECIMAL     NOT NULL,
    department_id   INTEGER     NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
    id          SERIAL      PRIMARY KEY,
    first_name  VARCHAR(30) NOT NULL,
    last_name   VARCHAR(30) NOT NULL,
    role_id     INTEGER     NOT NULL,
    manager_id  INTEGER,
    FOREIGN KEY (role_id) REFERENCES roles(id)
    ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(id)
    ON DELETE SET NULL
);