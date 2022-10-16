DROP TABLE IF EXISTS public.cities;

CREATE TABLE public.cities
(
	id INT PRIMARY KEY,
	name VARCHAR(50),
	ascii VARCHAR(50),
	lat DECIMAL,
	lng DECIMAL,
	country VARCHAR(50),
	iso2 VARCHAR(2),
	iso3 VARCHAR(3),
	admin_name VARCHAR(100),
	population NUMERIC
);

ALTER TABLE public.cities
ADD COLUMN created_by VARCHAR(50),
ADD COLUMN created_date TIMESTAMP,
ADD COLUMN last_updated_by VARCHAR(50),
ADD COLUMN last_updated_date TIMESTAMP
ADD COLUMN is_deleted;