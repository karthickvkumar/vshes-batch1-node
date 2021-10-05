const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(express.json());




const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Node JS Server is running on port 8080")
})