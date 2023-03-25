USE theta;

SET
    foreign_key_checks = 0;

DROP TABLE IF EXISTS places CASCADE;

CREATE TABLE `places` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(256) NOT NULL,
    `tags` VARCHAR(100),
    `coordinate` POINT,
    `description` VARCHAR(500),
    `created_date` DATETIME DEFAULT (utc_date()),
    `created_by` VARCHAR(45) NOT NUll DEFAULT 'Theta',
    `last_modified_date` DATETIME DEFAULT NULL,
    `last_modified_by` VARCHAR(45) DEFAULT NULL,
    `is_deleted` bit(1) DEFAULT 0,
    PRIMARY KEY (id)
);

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

USE theta;

DROP TABLE IF EXISTS images CASCADE;

CREATE TABLE images (
    `id` INT NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(256),
    `url` VARCHAR(3000),
    `tags` VARCHAR(50),
    `created_date` DATETIME DEFAULT (utc_date()),
    `created_by` VARCHAR(45) NOT NULL DEFAULT 'Theta',
    `last_modified_date` datetime DEFAULT NULL,
    `last_modified_by` varchar(45) DEFAULT NULL,
    `is_deleted` bit(1) DEFAULT 0,
    PRIMARY KEY (id)
);

USE theta;

DROP TABLE IF EXISTS activities_images CASCADE;

CREATE TABLE activities_images (
    `activity_id` INT NOT NULL,
    `image_id` INT NOT NULL,
    PRIMARY KEY (activity_id, image_id),
    FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE,
    FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE CASCADE
);

SET
    foreign_key_checks = 1;