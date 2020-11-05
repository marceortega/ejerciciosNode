let http= require('http');
let servidor= http.createServer(  function( peticion, respuesta){
    respuesta.writeHead(200,{'content-type':'text/html'});
    respuesta.write("respuesta para la direccion:" + peticion.url);
    console.log("peticion wevb")
})

servidor.listen(3000);
console.log("ejecutando servidor node js");
