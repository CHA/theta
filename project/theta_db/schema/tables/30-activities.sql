USE theta;

DROP TABLE IF EXISTS activities CASCADE;

CREATE TABLE `activities` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `activity` VARCHAR(200),
    `place_id` INT NOT NULL,
    `day` INT NOT NULL,
    `itinerary_id` INT NULL,
    `start_time` TIME NULL,
    `end_time` TIME NULL,
    `tags` VARCHAR(200),
    `price` DECIMAL,
    `description` VARCHAR(500),
    `sequence` NUMERIC,
    `created_date` datetime DEFAULT (utc_date()),
    `created_by` varchar(45) NOT NUll DEFAULT 'Theta',
    `last_modified_date` datetime DEFAULT NULL,
    `last_modified_by` varchar(45) DEFAULT NULL,
    `is_deleted` bit(1) DEFAULT 0,
    FOREIGN KEY (itinerary_id) REFERENCES itineraries(id) ON DELETE CASCADE,
    PRIMARY KEY (id)
);