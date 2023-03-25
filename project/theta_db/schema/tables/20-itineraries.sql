USE theta;

DROP TABLE IF EXISTS itineraries CASCADE;

CREATE TABLE `itineraries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `start_date` datetime,
  `end_date` datetime,
  `created_date` datetime DEFAULT (utc_date()),
  `created_by` varchar(45) DEFAULT 'Theta',
  `last_modified_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(45) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT 0,
  PRIMARY KEY (`id`)
);