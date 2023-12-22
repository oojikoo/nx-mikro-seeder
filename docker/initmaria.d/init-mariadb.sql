DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;
USE test_db;
CREATE TABLE IF NOT EXISTS test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Insert test data
INSERT INTO test_table (name) VALUES ('Test Name 1');
INSERT INTO test_table (name) VALUES ('Test Name 2');
INSERT INTO test_table (name) VALUES ('Test Name 3');
