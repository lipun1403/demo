const express = require('express');
const path = require('path');
const app = express();
const replica = process.env.APP_NAME ;
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${replica}`);
});

app.listen(port, () => {
    console.log(`${replica} is running on port:${port}`);
});