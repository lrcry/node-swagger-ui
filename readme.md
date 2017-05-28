# Node Swagger UI

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Swagger UI served by Node server with Basic Authentication support to protect your API document in a public environment.

## Author

[Hans Mong](hanssmith6@gmail.com)

## Get Started

Use [Docker](https://www.docker.com/community-edition), provided that I believe you are willing to try it.

I will provide a shell script for the fellas who are not a big fan of [Docker](https://www.docker.com/community-edition).

* Clone the repo

	`git clone https://github.com/lrcry/node-swagger-ui`

* Under the directory, build Docker image

	`docker build -t hansmong/nodeswaggerui .`

* Run the container

	`docker run -p 9000:9000 -d --name hansmong-nodeswaggerui hansmong/nodeswaggerui`

* In your favourite browser (which can normally render Swagger UI), hit `http://localhost:9000`, there you go.

## Future Changes

* Find an easier way to create, store and manage user signin credentials

* A shell script for "non-Dockeraholic"

## References (Alphabetical sorted)

[Express](https://github.com/expressjs/express)

[Express Basic Auth](https://github.com/LionC/express-basic-auth)

[Let's Encrypt SSL](https://letsencrypt.org/)

[Swagger UI](https://github.com/swagger-api/swagger-ui)

