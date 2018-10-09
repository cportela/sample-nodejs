'use strict';

// This project contains a starting point template for a Node JS 
// application that serves endpoints to clients over the web.

let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

// Load the two specialized routers
let widgets = require('./routers/widgets');
let users = require('./routers/users');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// If you have a favicon then uncommnet the following line
//app.use(favicon(__dirname + '/public/favicon.ico'));

// Hang more specialied routers off the root route.
// Typically I serve only static content from the root (public)
// (Try /hello.html, for example)
app.use('/', widgets);
app.use('/', users)

app.set('port', process.env.PORT || 3000);
let port = app.get('port');
let server = app.listen(port, function () {
    console.log(`Node JS service listening on ${port}`);
});
