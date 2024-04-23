const express = require("express");
const cookieParser = require("cookie-parser");
const staticRouter = require("./routes/staticRouter");
const router = require("./routes/user");
const { connectMongoDb } = require("./connection/connectMongo");
const { checkAuth } = require("./middlewares/auth");
const app = new express();
const PORT = 8002;

// mongodb connection
const url = "mongodb://localhost:27017/Authentication";
connectMongoDb(url)
  .then(() => console.log("connected to mongoDb"))
  .catch(() => console.log("error in mongo connection"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/static", staticRouter);
app.use("/user", router);

app.listen(PORT, () => {
  console.log(`server running at PORt ${PORT}`);
});
