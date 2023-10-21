require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./routes/user");

// middleWare
app.use("/api/v1/auth", authRouter);

const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
