DROP DATABASE burgers_db;
create DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean NOT NULL,
    date TIMESTAMP not null,
	PRIMARY KEY (id)
);

