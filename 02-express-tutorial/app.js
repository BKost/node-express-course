const express = require("express");
const app = express();
let { people } = require("./data");

const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth.js");

// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use("/api/people", peopleRouter);

app.use("/login", authRouter);

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
