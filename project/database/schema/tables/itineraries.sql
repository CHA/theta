DROP TABLE IF EXISTS itineraries;

CREATE TABLE `itineraries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `created_date` datetime DEFAULT (utc_date()),
  `created_by` varchar(45) DEFAULT NULL,
  `last_modified_date` datetime DEFAULT NULL,
  `last_modified_by` varchar(45) DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT 0,
  PRIMARY KEY (`id`)
);