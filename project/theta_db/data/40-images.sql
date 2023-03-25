USE theta;

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
    );