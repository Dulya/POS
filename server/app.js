var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var userRouter = require("./routes/user");
var orderRouter = require("./routes/order");
var orderitemRouter = require("./routes/orderitem");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/user", userRouter);
app.use("/api", require('./middlewares/authenticate.js'));
app.get('/api/session', (req, res) => {
  res.send({
    user_name:req.user.user_name,
    user_type:req.user.user_type
  });
});
app.use("/api/order", orderRouter);
app.use("/api/orderitem", orderitemRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('superSecret', 'sdfagregaergergre');

module.exports = app;
console.log("started");
app.listen(6069);
