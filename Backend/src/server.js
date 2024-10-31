// Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoDbPath = "mongodb+srv://piyush:72717272@cluster0.ju8v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose
  .connect(mongoDbPath)
  .then(function () {

    // App routes
    app.get("/", function (req, res) {
      const response = {message: "Congratulations API Works Fine !!"};
      res.json(response);
    });

    const noteRouter = require("./routes/Route");
    app.use("/notes", noteRouter);
  });

// Starting the server on a PORT
const PORT = process.env.PORT || 5000 ;
app.listen(PORT, function () {
  console.log("Server is running at PORT : PORT");
  console.log("\nClick here to view : http://localhost:PORT");
});
