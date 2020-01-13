const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors");
//app
const app = express();

//Require router
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
//require .env file
require("dotenv").config();

//Connect to mongoose
mongoose
  .connect(process.env.mongoURI, {
    // useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected...."))
  .catch(err => console.log(err));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());
//route middleware
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", blogRoute);
//Create Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
