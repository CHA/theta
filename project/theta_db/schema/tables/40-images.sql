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