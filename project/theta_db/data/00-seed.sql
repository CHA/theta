use theta;

DELETE FROM
    places;

ALTER TABLE
    places AUTO_INCREMENT = 1;

INSERT INTO
    places (name, tags, coordinate, description)
VALUES
    (
        'Big Ben',
        'Must visit',
        ST_GeomFromText('POINT(51.5007 0.1246)'),
        'Big Ben is the nickname for the Great Bell of the Great Clock of Westminster, at the north end of the Palace of Westminster in London, England, and the name is frequently extended to refer also to the clock and the clock tower'
    ),
    (
        'Westminster Abbey',
        'Must visit',
        ST_GeomFromText('POINT(51.4994 0.1273)'),
        'Westminster Abbey, formally titled the Collegiate Church of Saint Peter at Westminster, is an Anglican church in the City of Westminster, London, England. Since 1066, it has been the location of the coronations of 39 English and British monarchs, and a burial site for 18 English, Scottish and British monarchs'
    ),
    (
        'Victoria Tower Garden South',
        'Must visit',
        ST_GeomFromText('POINT(51.4970 0.1249)'),
        'Victoria Tower Gardens is a public park along the north bank of the River Thames in London, adjacent to the Victoria Tower, at the south-western corner of the Palace of Westminster. The park, extends southwards from the Palace to Lambeth Bridge, between Millbank and the river. It forms part of the Thames Embankment.'
    ),
    (
        'Westminster Pier River Cruise',
        'Transport,Station',
        NULL,
        'Take the river cruise from London Eye to Tower Bridge. Cruise ticket £10/person, duration 30 mins'
    ),
    (
        'Tower Bridge',
        'Must visit',
        ST_GeomFromText('POINT(51.5055 0.0754)'),
        'Tower Bridge is a Grade I listed combined bascule and suspension bridge in London, built between 1886 and 1894, designed by Horace Jones and engineered by John Wolfe Barry with the help of Henry Marc Brunel.'
    ),
    (
        'Five Guys (Tower Bridge)',
        'Eat',
        NULL,
        'Great lunch spot near Tower Bridge'
    );use theta;

DELETE FROM
    itineraries;

ALTER TABLE
    itineraries AUTO_INCREMENT = 1;

INSERT INTO
    itineraries (name, start_date, end_date)
VALUES
    ('A week in London', '2023-04-08', '2023-04-08');USE theta;

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
    );USE theta;

DELETE FROM
    images;

ALTER TABLE
    images AUTO_INCREMENT = 1;

INSERT INTO
    images (description, url)
VALUES
    (
        'Big Ben',
        'https://media.cntraveler.com/photos/571f9be4afc531496352d2a9/16:9/w_2560%2Cc_limit/GettyImages-174726708.jpg'
    ),
    (
        'Big Ben River',
        'https://media.architecturaldigest.com/photos/5991e6e8cb4a1b70eb61ac65/master/pass/Big%20Ben%20Reno%201.jpg'
    ),
    (
        'Westminster Abbey',
        'https://www.historic-uk.com/wp-content/uploads/2017/01/westminster-abbey.jpg'
    ),
    (
        'Victoria Tower Garden South',
        'https://upload.wikimedia.org/wikipedia/commons/a/af/Victoria_Tower_Gardens_2011_02.jpg'
    ),
    (
        'Tower Bridge',
        'https://static.standard.co.uk/2022/12/15/15/AFP_8UC6F4.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart'
    ),
    (
        'Five Guys Tower Bridge',
        'https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/1592306076768-CLKU8ERKTGTIRG52LYQT/EaoPExvXYAUvZ2K.jpg'
    );USE theta;

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
    (6, 6);