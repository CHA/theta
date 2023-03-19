USE theta;

DELETE FROM
    activities_images;

INSERT INTO
    activities_images (activity_id, image_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (3, 4),
    (5, 5),
    (6, 6)