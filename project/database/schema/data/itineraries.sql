DELETE FROM
    itineraries;

DELETE FROM
    activities;

DELETE FROM
    images;

DELETE FROM
    activities_images;

DELETE FROM
    places;

INSERT INTO
    places (id, name, tags, created_date, created_by)
VALUES
    (
        1,
        'Big Ben',
        'attraction',
        UTC_DATE(),
        'Theta'
    ),
    (
        2,
        'London Eye',
        'attraction',
        UTC_DATE(),
        'Theta'
    );

INSERT INTO
    images(
        id,
        description,
        url,
        tags,
        created_date,
        created_by
    )
VALUES
    (
        1,
        'Big Ben Image',
        'https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/hero_banner/big-ben_1.jpg',
        '',
        UTC_DATE(),
        'Theta'
    ),
    (
        2,
        'London Eye',
        'https://cdn-imgix.headout.com/mircobrands-content/image/2ef79931b193360f2d8d45d75bc56794-john-cameron-8Qqq7mlO1Vo-unsplash.jpg',
        '',
        UTC_DATE(),
        'Theta'
    );

INSERT INTO
    itineraries (
        id,
        name,
        created_date,
        created_by
    )
VALUES
    (
        1,
        '4 Days 2 Night in London',
        UTC_DATE(),
        'Theta'
    );

INSERT INTO
    activities (
        id,
        activity,
        place_id,
        `day`,
        itinerary_id,
        start_time,
        end_time,
        created_date,
        created_by
    )
VALUES
    (
        1,
        'Visit Big Ben',
        1,
        1,
        1,
        '10:00',
        '11:00',
        UTC_DATE(),
        'Theta'
    ),
    (
        2,
        'Visit London Eye',
        2,
        1,
        1,
        '11:00',
        '12:00',
        UTC_DATE(),
        'Theta'
    );

INSERT INTO
    activities_images (activity_id, image_id)
VALUES
    (1, 1),
    (2, 2);