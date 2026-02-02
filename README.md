# Github actions demo

## Using only docker

- Create a Dockerfile
- run `docker build -t api .`
- docker `run -it --rm -p 8080:8080 api`

## Using docker compose

- Create docker-compose.yml file
- run `docker ocker compose up -d` to run the container
- run `docker compose down` to stop the container
