// (C) Copyright 2017 Grupo Premiere 360
const express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('login');
});

app.listen(port, () => {
    console.log(`Started up at port localhost:${port}`);
});
