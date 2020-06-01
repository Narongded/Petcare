var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname+'/public')));
app.use(express.static(path.join(__dirname+'/public/*')));
const mysql = require('mysql') // เรียกใช้งาน MySQL module
 
// กำหนดการเชื่อมต่อฐานข้อมูล



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(8080,async ()=>{
    console.log('PORT:8080');
    
})

// catch 404 and forward to error handler

// error handler

module.exports = app;
