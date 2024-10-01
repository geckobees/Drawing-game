const express = require('express');
const app = express();
console.log('hi');

app.get('/', (req, res) => {
    res.send("hi");

});