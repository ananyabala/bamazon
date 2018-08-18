drop database bamazon;
create database bamazon;
use bamazon;

create table products (
item_id integer(10) auto_increment,
product_name varchar(30),
department_name varchar(30),
price integer(10),
stock_quantity integer(10),
primary key (item_id)
);

insert into products (product_name, department_name, price, stock_quantity)
values ("Tide Pods", "Household", 20.00, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Toothbrush", "Personal Hygiene", 3.00, 30);

insert into products (product_name, department_name, price, stock_quantity)
values ("Coke", "Beverages", 1.50, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("Trail Mix", "Snacks", 7.00, 40);

insert into products (product_name, department_name, price, stock_quantity)
values ("Notebook", "Stationery", 1.00, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Lipstick", "Beauty", 10.00, 70);

insert into products (product_name, department_name, price, stock_quantity)
values ("Headphones", "Electronics", 100.00, 50);

insert into products (product_name, department_name, price, stock_quantity)
values ("Socks", "Clothing and Accessories", 12.00, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Coffee", "Coffee and Tea", 3.00, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Shower Curtain", "Household", 20.00, 80);






