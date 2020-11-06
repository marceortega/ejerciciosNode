var fs= require('fs');

var contenido =fs.readFileSync('./archivos/texto.txt', 'utf8');

console.log(contenido)

// aqui con esto vemos el sistema blockIn porque va linea por linea, si el archivo txt, es muy pesado retrasada la ejecutcion de 
// de nuestro codigo
