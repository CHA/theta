use theta;

DELETE FROM
    itineraries;

ALTER TABLE
    itineraries AUTO_INCREMENT = 1;

INSERT INTO
    itineraries (name, start_date, end_date)
VALUES
    ('A week in London', '2023-04-08', '2023-04-08');