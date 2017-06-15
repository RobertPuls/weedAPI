const express = require('express');
const bodyParser = require('body-parser');
const weeds = require("./routes/weedRoutes");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/",weeds);

app.use(function (req, res, next){
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next){
  res.status(err.status || 500);
  res.json({
    "message": err.message,
    "error": req.app.get("env") === "development" ? err : {}
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("ready");
});
