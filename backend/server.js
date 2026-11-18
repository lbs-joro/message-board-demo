const express = require("express");
const sqlite3 = require("sqlite3");
const cors = require("cors");

const database = new sqlite3.Database("database.db");

const app = express();
app.use(express.json());
app.use(cors());

//Endpoint som hämtar alla meddelanden
app.get("/api/messages", function(request, response){
    //All hämtar flera rader
    database.all("SELECT id, content FROM messages", function(error, rows){
        if(error){
            console.log(error);
            response.send("Something went wrong");
        }
        else{
            response.send(rows);
        }
    })
})

//Endpoint för att skapa ett meddelande
app.post("/api/messages", function(request, response){ 
    database.run("INSERT INTO messages(content) VALUES (?)",request.body.message );

    response.send("Message was created");
})


app.listen(8080);
