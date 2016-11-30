CREATE TABLE users
 (
 UserId SERIAL PRIMARY KEY,
 first_name varchar(40),
 last_name varchar(40),
 address varchar(75),
 city varchar(75),
 state varchar(50),
 zip INTEGER,
 phone INTEGER
 )
 ;

CREATE TABLE hiketable
(
hikeId SERIAL PRIMARY KEY,
userId INTEGER,
hike_name varchar(150)
)
; 

CREATE TABLE pinsTable
(
pinId SERIAL PRIMARY KEY,
lat INTEGER,
long INTEGER,
date_time TIMESTAMP with TIME ZONE,
hikeId INTEGER,
start_point BOOLEAN
);
