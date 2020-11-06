//aprendamos la configuracion base de un archivo 
//1° TENEMOS LAS DISTINTAS LIBRERIAS Y PAQUETES QUE NECEITA EXPRESS
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// aqui estan las rutas !!!!!!!!!!!!!!!

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//creando una ruta nueva llamada prueba
var pruebaRouter = require('./routes/prueba'); // recuerda que en routes debes agregar este archivo

//2° INICIALIZAMOS EXPRESS
var app = express();

//3° DEFINIMOS DIFERENTES CAPACIDADES DEL SISTEMA DE PLANTILLAS, AQUI POR EJEMPLO ESTAMOS UTILIZANDP LAS PLANTILLAS PUG
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//4° DEFINIMOS LAS DIFERENTES RUTAS

app.use('/', indexRouter);
app.use('/users', usersRouter);
//estoy definiendo una ruta para el archivo prueba
app.use('/prueba', pruebaRouter);



//5° MOSTRAMOS LAS DIFERENTES OPCIONES PARA MOSTRAR INFORMACION DE ERROR
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
