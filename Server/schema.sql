create database odfds;
user odfds;
CREATE TABLE [IF NOT EXISTS] Restaurant(restaurant_id, name, address, username,password,email);
CREATE TABLE [IF NOT EXISTS] Orders(order_id, restaurant_id,driver_id,picked_up, delivery_address, customer_phone, completed);
CREATE TABLE [IF NOT EXISTS] Driver(driver_id, username, password, name, is_active, is_available, current_location, numder_of_orders, email, picture);