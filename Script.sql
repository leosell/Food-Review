CREATE USER 'food_review'@'localhost' IDENTIFIED WITH mysql_native_password BY 'food_review';
CREATE DATABASE food_review;
GRANT ALL PRIVILEGES ON food_review.* TO 'food_review'@'localhost';
FLUSH PRIVILEGES;