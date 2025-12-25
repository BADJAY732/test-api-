CREATE DATABASE IF NOT EXISTS user_api;
USE user_api;

DROP TABLE IF EXISTS expenses;


CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    expense_date DATE NOT NULL,
    amount DECIMAL(10,2) NOT NULL
);

INSERT INTO expenses (expense_date, amount) VALUES
('2024-10-05', 1200),
('2024-10-20', 2000),
('2024-11-10', 1800),
('2024-12-01', 2500),
('2025-01-15', 4000);
