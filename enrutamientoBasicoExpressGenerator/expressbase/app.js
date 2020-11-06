// la primera variable es para traerme todo lo relacionado con express
var express =require('express');
// la var app me trae todo expres 
var app= express();

app.all ('/', function(peticion, respuesta){
  respuesta.send("Hola MUNDO NODE !!! bienvenidos a este sueño") // podemos servir diferente contenido a traves de las distintas rutas
})
// app, es una instancia de express, 
//metodos de htpp
//metodo all, quiere que decir que independiente de por donde entre el usuario mostrara eso
// creamos una funcion que funcionara solo si el usurio ingresa por el metodo get
app.get ('/acerca', function(peticion, respuesta){
  respuesta.send("Acerca del estudiante") // podemos servir diferente contenido a traves de las distintas rutas
})

//verbos de htpp, son las diferentes formas de llamar

// para inicializar utilizo esto, aqui lo estoy ejecutando en el local host 3000, listen escucha a un puerto especifico, y yo defino el puerto por ejemplo 3000 , la funcion que viene a continuacion es para seguir con la sintaxis de listen pero no trae nada ningun codigo en su interior
var server=app.listen (3000, function (){

});

// cada vez que escuchemos una peticion vamos a enrutar el trafico hacia diferentes secciones , voy a escribir antes del var server
// ahi escribire que mi app escuche todos los verbos de http y le voy a definir las rutas
// siendo la ruta inicial un /