const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(express.json());

const userList = [
  {
    name : "Karthick",
    age : 27
  },
  {
    name : "Kumar",
    age : 28
  },
  {
    name : "KK",
    age : 29
  },
]

app.get("/api/users", (request, response) => {
  response.status(200).send(userList);
});


const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Node JS Server is running on port 8080")
})