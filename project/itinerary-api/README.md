# Itinerary API

## Running as container
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

1. Create image: `docker build . -t <your username>/itinerary-api`
2. Check images created successfully: `docker images`
3. Run `docker run -p 49160:8080 -d <your username>/itinerary-api`
4. Check container is running `docker ps`
5. Print logs `docker logs <container id>`
6. Access `http://localhost:49610` in your local machine


To shutdown image `docker kill <container id>`
