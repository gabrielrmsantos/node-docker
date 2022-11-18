const express = require("express");
const mysql = require("mysql");

const port = 3000;

const connection = mysql.createConnection({
  host: "database",
  user: "root",
  password: "root",
  database: "dockernode"
});

const app = express();

const executeQuery = async (query) => {
  return new Promise((resolve, reject) => {
    try {
      connection.query(query, (err, response) => {
        if(err) {
          return reject(err);
        }

        return resolve(response);
      });      
    } catch(e) {
      return reject(e);
    }
  });
};

app.get("/", async (req, res) => {
  try {
    const date = new Date();
    const identifier = `registry #${ date.getTime() }`;
    const query = `insert into people (name) values ("${ identifier }")`;
    await executeQuery(query);

    const queryResponse = await executeQuery(`select * from people`);

    let response = "<h1>Full Cycle Rocks!</h1>";
    response += queryResponse.map((row) => `<p> - ${ row.name } </p>`).join("");
  
    return res.send(response);
  } catch(e) {
    return res.status(500).send(e.message);    
  }
});

app.listen(port, () => {
  console.log("Server is running!");
});

const executeMigration = () => {
  connection.query(`
    CREATE TABLE IF NOT EXISTS people (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    )
  `);
};

executeMigration();