'use strict';

// Create a separate router for each data domain,
// in this case widgets but it could be accounts,
// customers, users, etc.

var WidgetsRouter = require('express').Router();

/* GET widgets listing. */
WidgetsRouter.get('/widgets', function (req, res) {
    res.send('respond with a list of widgets');
});

module.exports = WidgetsRouter;
