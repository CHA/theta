DROP TABLE IF EXISTS public.places;

CREATE TABLE public.places
(
	id INT GENERATED ALWAYS AS IDENTITY,
	name VARCHAR(100),
	address VARCHAR(225),
	postcode VARCHAR(10),
	city_id INT REFERENCES cities(id)
);