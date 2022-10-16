DROP TABLE IF EXISTS public.activities;

CREATE TABLE public.activities
(
	id INT GENERATED ALWAYS AS IDENTITY,
	name VARCHAR(100),
	start_time TIMESTAMP,
	end_time TIMESTAMP,
	place_id INT NULL,
	created_by VARCHAR(50),
	created_date TIMESTAMP,
	last_updated_by VARCHAR(50),
	last_updated_date TIMESTAMP,
	tags VARCHAR(225)
);