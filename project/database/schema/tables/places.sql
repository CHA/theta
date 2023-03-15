USE theta;

DROP TABLE IF EXISTS places;

CREATE TABLE `places` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(256) NOT NULL,
    `tags` VARCHAR(100),
    `coordinate` POINT,
    `created_date` DATETIME DEFAULT (utc_date()),
    `created_by` VARCHAR(45) NOT NUll,
    `last_modified_date` DATETIME DEFAULT NULL,
    `last_modified_by` VARCHAR(45) DEFAULT NULL,
    `is_deleted` bit(1) DEFAULT 0,
    PRIMARY KEY (id)
)