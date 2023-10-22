// This is very basic api for authentication of the admin dashboard.
require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const connectDb = require("./db/connectDb");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

// middleWare
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRouter);
app.use(notFound);
app.use(errorHandler);

const port = 8000 || process.env.PORT;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
