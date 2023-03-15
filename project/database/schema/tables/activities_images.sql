USE theta;

DROP TABLE IF EXISTS activities_images;

CREATE TABLE activities_images (
    `activity_id` INT NOT NULL,
    `image_id` INT NOT NULL,
    PRIMARY KEY (activity_id, image_id)
)