DROP TABLE IF EXISTS public.itineraries;

CREATE TABLE public.itineraries
(
	id INT PRIMARY KEY,
	name VARCHAR(100),
	score FLOAT NULL,
	estimated_budget DECIMAL,
	description VARCHAR(1000),
	created_by VARCHAR(50),
	created_date TIMESTAMP,
	last_modified_by VARCHAR(50) NULL,
	last_modified_date TIMESTAMP
);