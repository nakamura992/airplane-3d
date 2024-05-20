const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
