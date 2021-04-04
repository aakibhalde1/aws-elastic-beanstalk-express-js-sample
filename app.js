const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('WE HAVE ADDED A REVIEW STAGE  BETWEEN BUILD AND DEPLOY PIPELINE'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
