const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, '/resume/Phuc\ Tran\ Resume\ Together\ Senior\ Health.pdf'))
});