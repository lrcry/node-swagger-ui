const jsyaml = require('js-yaml');
const fs = require('fs');
const http = require('http');
const express = require('express');
const ecstatic = require('ecstatic');
const basicauth = require('express-basic-auth');

const app = express();

app.use(basicauth({
	users: {
		'usernameGoesHere': 'passwordPutHere'
	},
	challenge: true,
	realm: 'node-swagger-ui'
}));

app.use((req, res, next) => {
    if (!fs.existsSync(__dirname + '/swagger.json')) {
        const doc = jsyaml.safeLoad(fs.readFileSync(__dirname + '/swagger.yaml', 'utf8'));
        fs.writeFileSync(__dirname + '/dist/swagger.json', JSON.stringify(doc), { 'encoding': 'utf8' });
    }
    next();
});

app.use(ecstatic({
    root: __dirname + '/dist'
}));

http.createServer(app).listen(process.env.PORT || 9000);





