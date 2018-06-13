const express = require('express');
const py = require('./blockclaim.js');
const app = express();

app.use((req, res, next) => {
    console.log("logged");
    next();
})

app.get('/', (req, res) => {
    py.test_function([]);
    res.send("Blockclaim");
})

app.listen(8080, () => console.log("listening to 8080"));