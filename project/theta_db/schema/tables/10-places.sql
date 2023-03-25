USE theta;

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