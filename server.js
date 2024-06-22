const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbconnection");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT;
connectDB();
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`The server is running on the port ${port}`);
});
