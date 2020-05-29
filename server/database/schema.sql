DROP DATABASE IF EXISTS gameSchema;
CREATE DATABASE gameSchema;


CREATE TABLE Game (
	id int PRIMARY KEY,
	name text,
	details text,
  images text[]
);
