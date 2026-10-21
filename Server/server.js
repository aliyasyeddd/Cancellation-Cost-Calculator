
const express = require('express');

const app = express();

//request handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Start the server
app.listen(7777, () => {
  console.log('Server is running on port 7777');
});