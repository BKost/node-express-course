require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// other packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// db
const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/authRoutes");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// app.post("/api/v1/auth/register", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("eom");
// });

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`App is listening on port ${port}`));
  } catch (error) {}
};

start();
