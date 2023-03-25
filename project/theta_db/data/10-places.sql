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
    );