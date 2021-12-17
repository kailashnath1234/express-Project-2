const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

const studentList = ["Ramesh", "Sayali", "Sanjana", "Rajesh"];

app.get("/student/studentsList", (req, res) => {
  res.send(studentList);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Listeing on Port", PORT));
