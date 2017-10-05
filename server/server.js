// (C) Copyright 2017 Grupo Premiere 360

const express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hola GP360!');
});

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
