'use strict';

// Create a separate router for each data domain,
// in this case users but it could be accounts,
// customers, widgets, etc.

let UsersRouter = require('express').Router();

/* GET users listing. */
UsersRouter.get('/users', function (req, res) {
    res.send('respond with a list of users');
});

module.exports = UsersRouter;
