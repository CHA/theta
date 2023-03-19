USE theta;

DROP TABLE IF EXISTS activities_images;

CREATE TABLE activities_images (
    `activity_id` INT NOT NULL,
    `image_id` INT NOT NULL,
    PRIMARY KEY (activity_id, image_id),
    FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE,
    FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE CASCADE
)