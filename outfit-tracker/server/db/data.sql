CREATE DATABASE outfit-maker;

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

CREATE TABLE clothing(
  clothing_id SERIAL NOT NULL PRIMARY KEY,
  user_email VARCHAR(255) NOT NULL,
  photo TEXT NOT NULL,
  title VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL,
  color VARCHAR(50)
);

CREATE TABLE outfits(
  outfits_id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  top TEXT NOT NULL,
  bottom TEXT NOT NULL,
  shoes TEXT NOT NULL,
  note TEXT
);

INSERT INTO clothing (user_email, photo, title, category, color) values ('natalie@test.com', 'test photo', 'Black Shirt', 'Top', 'Black');
INSERT INTO clothing (user_email, photo, title, category, color) values ('natalie@test.com', 'test photo 2', 'Floral Skirt', 'Bottom', 'Pink');
INSERT INTO clothing (user_email, photo, title, category, color) values ('natalie@test.com', 'test photo 3', 'Green Vans', 'Shoe', 'Green');
INSERT INTO clothing (user_email, photo, title, category, color) values ('natalie@test.com', 'test photo 4', 'Led Zeppelin Sweatshirt', 'Top', 'Grey');