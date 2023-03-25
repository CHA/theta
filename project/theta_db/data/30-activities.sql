USE theta;

DELETE FROM
    activities;

ALTER TABLE
    activities AUTO_INCREMENT = 1;

INSERT INTO
    activities (
        activity,
        place_id,
        day,
        itinerary_id,
        start_time,
        end_time,
        tags,
        price,
        description,
        sequence
    )
VALUES
    (
        'Visit Big Ben',
        1,
        1,
        1,
        NULL,
        NULL,
        NULL,
        0,
        '',
        1
    ),
    (
        'Visit Westminster Abbey',
        2,
        1,
        1,
        NULL,
        NULL,
        NULL,
        0,
        '',
        2
    ),
    (
        'Visit Victoria Garden South to take a photo of UK parliament',
        3,
        1,
        1,
        NULL,
        NULL,
        NULL,
        0,
        '',
        3
    ),
    (
        'Take a river cruise from Westminster Pier River Cruise (London Eye to Tower Bridge)',
        4,
        1,
        1,
        NULL,
        NULL,
        NULL,
        0,
        '',
        4
    ),
    (
        'Visit Tower Bridge',
        5,
        1,
        1,
        NULL,
        NULL,
        NULL,
        0,
        '',
        5
    ),
    (
        'Lunch at Five Guys Tower Bridge',
        6,
        1,
        1,
        NULL,
        NULL,
        NULL,
        0,
        '',
        6
    );