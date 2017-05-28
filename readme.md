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

## Customise

### YAML document

Just copy and paste your YAML API document in (preserve the name `swagger.yaml`), then you are good to go.

### Access Control

For now just replace the user credentials in `index.js`. I will take care of the case of multiple users later e.g. to provide a super naive portal for doing this.

To be specific, in `index.js`

```
app.use(basicauth({
	users: {
		'PUT_YOUR_USERNAME_HERE': 'PUT_YOUR_PASSWORD_HERE'
	},
	challenge: true,
	realm: 'node-swagger-ui'
}));
```

Or one step further, I am thinking of putting it into some environment variables with default values.

## Future Changes

* Find an easier way to create, store and manage user signin credentials

* A shell script for "non-Dockeraholic"

## References (Alphabetical sorted)

[Express](https://github.com/expressjs/express)

[Express Basic Auth](https://github.com/LionC/express-basic-auth)

[Let's Encrypt SSL](https://letsencrypt.org/)

[Swagger UI](https://github.com/swagger-api/swagger-ui)

