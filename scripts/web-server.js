const express = require('express');
const path = require('path');
const app = express();
const rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen(8000);
console.log('Listening on port 8000...');
