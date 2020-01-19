DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	id integer NOT NULL auto_increment,
    product_name varchar(50) NOT NULL,
    department_name varchar(50),
    price DECIMAL(13,2),
    stock_quantity int(50),
     primary key(id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values
("Harry Potter and Sorceror's Stone", "books", 8.50, 8),
("Sony Television", "electronics", 1999.99, 1),
("Silver Necklace", "jewlery", 49.99, 10),
("Mario Kart 8 Deluxe", "games", 59.99, 15),
("H&M shirt", "clothes", 19.99, 2),
("To Kill a Mokingbird", "books", 6.99, 20),
("Super Smash Brothers: Ultimate", "games", 59.99, 4),
("Diamond ring", "jewlery", 599.99, 2),
("Monitor", "electronics", 149.99, 5),
("Levis Jeans", "clothes", 29.99, 8);

Select * from products;