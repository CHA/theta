DELETE FROM itineraries;
DELETE FROM activities;

INSERT INTO itineraries
(
    id, 
    name, 
    created_date, 
    created_by
)
VALUES
(1, '4 Days 2 Night in London', UTC_DATE(), 'Theta');

INSERT INTO activities
(
    id, 
    activity, 
    `day`,
    itinerary_id, 
    start_time, 
    end_time, 
    created_date,
    created_by
)
VALUES
(1, 'Visit Big Ben', 1, 1, '10:00', '11:00', UTC_DATE(), 'Theta')

