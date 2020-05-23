DROP keyspace IF EXISTS gameSchema;

CREATE KEYSPACE gameSchema WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE gameSchema;

CREATE TABLE Game (
    id int PRIMARY KEY,
    name text,
    details text,
    images list<text>

);
