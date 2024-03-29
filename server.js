const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(__dirname + '/static/images/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'static')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port);
