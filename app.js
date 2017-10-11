const express = require('express');
const path = require('path');
const User = require('./playground/login');
const bodyParser = require('body-parser');
const _ = require('lodash');

var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    var register = _.pick(req.body, ['email', 'password']);
    console.log('body',register);
    // User.register({

    // }).then(() => {

    // }).catch(err => {

    // });
});

app.listen(port, () => {
    console.log(`Started up at port localhost:${port}`);
});

module.exports = app;
