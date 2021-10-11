const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(express.json());

const connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : ""
})

connection.connect((error) => {
  if(error){
    throw error;
  }

  console.log("MYSQL Database is Connected")
});

app.get("/api/user/list", (request, response) => {
  
});

app.post("/api/user/create", (request, response) => {
  
});

app.put("/api/user/edit/:id", (request, response) => {
  
});

app.delete("/api/user/delete/:id", (request, response) => {
  
});

const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Node JS Server is running on port 8080")
})