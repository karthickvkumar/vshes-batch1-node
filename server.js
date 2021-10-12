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
  password : "",
  database : "vshesh"
})

connection.connect((error) => {
  if(error){
    throw error;
  }

  console.log("MYSQL Database is Connected")
});

app.get("/api/user/list", (request, response) => {
  const query = `SELECT * FROM user_information`;

  connection.query(query, (error, result) => {
      if(error){
        response.status(500).send(error);
        return;
      }

      response.status(200).send(result)
  });
});

app.post("/api/user/create", (request, response) => {
  const firstName = request.body.first_name;
  const lastName = request.body.last_name;
  const email = request.body.email;
  const contactNumber = request.body.contact_number;

  const query = `INSERT INTO user_information (first_name, last_name, email, contact_number) VALUES ('${firstName}', '${lastName}', '${email}', ${contactNumber})`;

  connection.query(query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result : result,
      message : "Successfully User Profile has been created"
    })
  });
});

app.put("/api/user/edit/:id", (request, response) => {
  let id = request.params.id;

  const firstName = request.body.first_name;
  const lastName = request.body.last_name;
  const email = request.body.email;
  const contactNumber = request.body.contact_number;

  const query = `UPDATE user_information SET first_name = '${firstName}', last_name = '${lastName}', email = '${email}', contact_number = ${contactNumber} WHERE id = ${id}`;

  connection.query(query, (error, result) => {
    if(error){
      response.status(500).send(error);
      return;
    }

    response.status(200).send({
      result : result,
      message : "Updated the user profile successfully"
    })
  });
});

app.delete("/api/user/delete/:id", (request, response) => {
  
});

const port = process.env.PORT || 8080;
http.listen(port, () => {
  console.log("Node JS Server is running on port 8080")
})